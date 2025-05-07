export interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: 'breaking' | 'sports' | 'events' | 'news';
  date: string;
  author: string;
  imageUrl?: string;
  isFeatured?: boolean;
}
