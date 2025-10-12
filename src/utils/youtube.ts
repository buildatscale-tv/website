/**
 * Parse ISO 8601 duration string and return total seconds
 * @param duration - ISO 8601 duration string (e.g., "PT1M30S")
 * @returns Total duration in seconds
 */
export function getDurationInSeconds(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');

  return hours * 3600 + minutes * 60 + seconds;
}

/**
 * Check if a video is a YouTube Short (60 seconds or less)
 * @param duration - ISO 8601 duration string
 * @returns true if the video is a Short
 */
export function isShort(duration: string | undefined): boolean {
  if (!duration) return false;
  return getDurationInSeconds(duration) <= 60;
}

/**
 * Format ISO 8601 duration to human-readable time (e.g., "1:23" or "1:23:45")
 * @param duration - ISO 8601 duration string (e.g., "PT1M30S")
 * @returns Formatted duration string
 */
export function formatDuration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '';

  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format view count to human-readable format (e.g., "1.2K views")
 * @param count - View count number
 * @returns Formatted view count string
 */
export function formatViews(count?: number | string): string {
  if (!count) return '0 views';
  const num = typeof count === 'string' ? parseInt(count) : count;
  if (num < 1000) return `${num} views`;
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K views`;
  return `${(num / 1000000).toFixed(1)}M views`;
}

/**
 * Format like count to human-readable format (e.g., "1.2K likes")
 * @param count - Like count number
 * @returns Formatted like count string
 */
export function formatLikes(count?: number | string): string {
  if (!count) return '0 likes';
  const num = typeof count === 'string' ? parseInt(count) : count;
  const suffix = num === 1 ? ' like' : ' likes';
  if (num < 1000) return `${num}${suffix}`;
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K${suffix}`;
  return `${(num / 1000000).toFixed(1)}M${suffix}`;
}

/**
 * Format date to relative time string (e.g., "2 days ago")
 * @param date - Date string or Date object
 * @returns Relative time string
 */
export function getTimeAgo(date: string | Date): string {
  const now = new Date();
  const published = new Date(date);
  const diffMs = now.getTime() - published.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
  }
  const years = Math.floor(diffDays / 365);
  return years === 1 ? '1 year ago' : `${years} years ago`;
}
