export interface NewsList {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface TabEvent {
  event: MouseEvent;
  index: number;
}

export interface NewsRequest {
  query: string;
  apiKey: string;
}
