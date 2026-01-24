import type { Loader } from "astro/loaders";

interface PlaylistLoaderOptions {
  apiKey: string;
  channelId: string;
  maxResults?: number;
}

interface YouTubePlaylist {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  itemCount: number;
  publishedAt: string;
  videoIds: string[];
}

interface YouTubePlaylistItem {
  snippet: {
    resourceId: {
      videoId: string;
    };
  };
}

interface YouTubePlaylistResponse {
  items: Array<{
    id: string;
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        default?: { url: string };
        medium?: { url: string };
        high?: { url: string };
        standard?: { url: string };
        maxres?: { url: string };
      };
    };
    contentDetails: {
      itemCount: number;
    };
  }>;
  nextPageToken?: string;
}

interface YouTubePlaylistItemsResponse {
  items: YouTubePlaylistItem[];
  nextPageToken?: string;
}

/**
 * Fetch all video IDs from a playlist
 */
async function fetchPlaylistVideoIds(
  playlistId: string,
  apiKey: string
): Promise<string[]> {
  const videoIds: string[] = [];
  let pageToken: string | undefined;

  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", apiKey);
    if (pageToken) {
      url.searchParams.set("pageToken", pageToken);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      console.error(`Failed to fetch playlist items for ${playlistId}:`, await response.text());
      break;
    }

    const data: YouTubePlaylistItemsResponse = await response.json();

    for (const item of data.items) {
      if (item.snippet?.resourceId?.videoId) {
        videoIds.push(item.snippet.resourceId.videoId);
      }
    }

    pageToken = data.nextPageToken;
  } while (pageToken);

  return videoIds;
}

/**
 * Astro content loader for YouTube channel playlists
 */
export function youTubePlaylistsLoader(options: PlaylistLoaderOptions): Loader {
  const { apiKey, channelId, maxResults = 50 } = options;

  return {
    name: "youtube-playlists-loader",
    load: async ({ store, logger }) => {
      logger.info("Fetching YouTube playlists...");

      const playlists: YouTubePlaylist[] = [];
      let pageToken: string | undefined;

      // Fetch playlists from the channel
      do {
        const url = new URL("https://www.googleapis.com/youtube/v3/playlists");
        url.searchParams.set("part", "snippet,contentDetails");
        url.searchParams.set("channelId", channelId);
        url.searchParams.set("maxResults", String(Math.min(maxResults, 50)));
        url.searchParams.set("key", apiKey);
        if (pageToken) {
          url.searchParams.set("pageToken", pageToken);
        }

        const response = await fetch(url.toString());
        if (!response.ok) {
          const error = await response.text();
          logger.error(`Failed to fetch playlists: ${error}`);
          throw new Error(`YouTube API error: ${error}`);
        }

        const data: YouTubePlaylistResponse = await response.json();

        for (const item of data.items) {
          // Fetch video IDs for this playlist
          const videoIds = await fetchPlaylistVideoIds(item.id, apiKey);

          const playlist: YouTubePlaylist = {
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail:
              item.snippet.thumbnails.maxres?.url ||
              item.snippet.thumbnails.standard?.url ||
              item.snippet.thumbnails.high?.url ||
              item.snippet.thumbnails.medium?.url ||
              item.snippet.thumbnails.default?.url ||
              "",
            itemCount: item.contentDetails.itemCount,
            publishedAt: item.snippet.publishedAt,
            videoIds,
          };

          playlists.push(playlist);
        }

        pageToken = data.nextPageToken;

        // Stop if we've reached maxResults
        if (playlists.length >= maxResults) {
          break;
        }
      } while (pageToken);

      logger.info(`Found ${playlists.length} playlists`);

      // Store playlists
      store.clear();
      for (const playlist of playlists) {
        store.set({
          id: playlist.id,
          data: {
            title: playlist.title,
            description: playlist.description,
            thumbnail: playlist.thumbnail,
            itemCount: playlist.itemCount,
            publishedAt: playlist.publishedAt,
            videoIds: playlist.videoIds,
          },
        });
      }
    },
  };
}
