import { Link, useParams } from 'react-router-dom';
import { useGetArticlesQuery } from '../store/api/articlesApi';
import { Loading } from '../components';
import { useAppSelector } from '../store/store';
export const ArticleDetail = () => {
  const period = useAppSelector((state) => state.period.period);
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useGetArticlesQuery(period);

  const article = data && data?.results.find((art) => art.id === Number(id));

  if (isFetching) return <Loading />;

  if (!article)
    return (
      <div>
        <h2>Article not found</h2>;
        <Link
          to='/'
          className='mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition'
        >
          Back to List
        </Link>
      </div>
    );

  return (
    <div className='max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-bold text-gray-800'>{article.title}</h2>
      <p className='text-gray-600 mt-4'>{article.abstract}</p>
      <Link
        to={article.url}
        target='_blank'
        className='mt-4 inline-block text-blue-600 hover:underline'
      >
        Read Full Article
      </Link>
      <br />
      <Link
        to='/'
        className='mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition'
      >
        Back to List
      </Link>
    </div>
  );
};
