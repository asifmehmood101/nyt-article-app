import { ArticleCard } from './ArticleCard';
import { ArticlesListProps } from '../types';

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <ul className='space-y-4'>
      {articles?.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ul>
  );
};
