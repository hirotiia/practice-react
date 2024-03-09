import fetch from 'node-fetch';

export async function gerAllPostsIds() {
  const youtubeApiPath = 'https://www.googleapis.com/youtube/v3/search';
  const response = await fetch(youtubeApiPath);
  const data = await response.json();
}
