import { ArticleCardProps } from '../types';
import { Link } from 'react-router-dom';

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <li className='border p-4 rounded-lg shadow'>
      <Link to={`/article/${article.id}`}>
        <h3 className='text-xl font-semibold text-blue-500'>{article.title}</h3>
        <p className='text-gray-600'>{article.abstract}</p>
      </Link>
    </li>
  );
};
