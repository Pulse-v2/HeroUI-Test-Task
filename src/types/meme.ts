export interface Meme {
  id: number;
  name: string;
  image: string;
  likes: number;
}

export const initialMemes: Meme[] = [
  { id: 1, name: 'Distracted Boyfriend', image: 'https://i.kym-cdn.com/entries/icons/original/000/022/085/Distracted_Boyfriend.jpg', likes: Math.floor(Math.random() * 100) },
  { id: 2, name: 'Two Buttons', image: 'https://i.kym-cdn.com/entries/icons/original/000/019/571/dailystruggg.jpg', likes: Math.floor(Math.random() * 100) },
  { id: 3, name: 'Change My Mind', image: 'https://i.kym-cdn.com/entries/icons/original/000/025/090/tumblr_inline_p1brmcd9Dk1rr08jv_500.jpg', likes: Math.floor(Math.random() * 100) },
  { id: 4, name: 'Drake Hotline Bling', image: 'https://i.kym-cdn.com/entries/icons/original/000/020/147/drake.jpg', likes: Math.floor(Math.random() * 100) },
  { id: 5, name: 'Expanding Brain', image: 'https://i.kym-cdn.com/entries/icons/original/000/022/266/brain.jpg', likes: Math.floor(Math.random() * 100) },
  { id: 6, name: 'Surprised Pikachu', image: 'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png', likes: Math.floor(Math.random() * 100) },
  { id: 7, name: 'Woman Yelling at Cat', image: 'https://i.kym-cdn.com/entries/icons/original/000/030/157/womanyellingcat.jpg', likes: Math.floor(Math.random() * 100) },
  { id: 8, name: 'This Is Fine', image: 'https://i.kym-cdn.com/entries/icons/original/000/018/012/this_is_fine.jpeg', likes: Math.floor(Math.random() * 100) },
  { id: 9, name: 'One Does Not Simply', image: 'https://i.kym-cdn.com/entries/icons/original/000/000/341/i-dont-always-X-but-when-i-do-i-Y.jpg', likes: Math.floor(Math.random() * 100) },
  { id: 10, name: 'Ancient Aliens Guy', image: 'https://i.kym-cdn.com/entries/icons/original/000/005/848/Aliens.jpg', likes: Math.floor(Math.random() * 100) },
]; 