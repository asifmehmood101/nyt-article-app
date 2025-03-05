export interface Article {
  id: number;
  title: string;
  url: string;
  byline: string;
  abstract: string;
}

export interface ArticlesListProps {
  articles: Article[] | undefined;
}

export interface ArticleCardProps {
  article: Article;
}

export interface PeriodState {
  period: number;
}

export interface ErrorProps {
  error: string;
}
