import { defineCollection } from "astro:content";
import { youTubeLoader } from "@ascorbic/youtube-loader";

const videos = defineCollection({
  loader: youTubeLoader({
    type: "channel",
    apiKey: import.meta.env.YOUTUBE_API_KEY,
    // Load videos from the @buildatscale channel
    channelId: "UC9uYVKCyi4u9Awmwafg_60Q",
    maxResults: 50,
    order: "date"
  }),
});

export const collections = { videos };
