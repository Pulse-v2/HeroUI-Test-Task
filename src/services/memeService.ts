import { Meme } from '../types/meme';

const REDDIT_API_URL = 'https://www.reddit.com/r/memes.json?limit=10';

export async function fetchMemes(): Promise<Meme[]> {
  try {
    const response = await fetch(REDDIT_API_URL);
    const data = await response.json();
    
    return data.data.children.map((post: any, index: number) => ({
      id: index + 1,
      name: post.data.title,
      image: post.data.url,
      likes: Math.floor(Math.random() * 100)
    }));
  } catch (error) {
    console.error('Помилка при отриманні мемів:', error);
    return [];
  }
} 