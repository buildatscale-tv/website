import { defineCollection } from "astro:content";
import { youTubeLoader } from "@ascorbic/youtube-loader";
import { youTubePlaylistsLoader } from "../loaders/youtube-playlists";

const CHANNEL_ID = "UC9uYVKCyi4u9Awmwafg_60Q";

const videos = defineCollection({
  loader: youTubeLoader({
    type: "channel",
    apiKey: import.meta.env.YOUTUBE_API_KEY,
    // Load videos from the @buildatscale channel
    channelId: CHANNEL_ID,
    maxResults: 50,
    order: "date"
  }),
});

const playlists = defineCollection({
  loader: youTubePlaylistsLoader({
    apiKey: import.meta.env.YOUTUBE_API_KEY,
    channelId: CHANNEL_ID,
    maxResults: 25,
  }),
});

export const collections = { videos, playlists };
