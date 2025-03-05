import { ArticlesList, Loading, Error } from '../components';
import { useGetArticlesQuery } from '../store/api/articlesApi';
import { setPeriod } from '../store/state/periodSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export function ArticlesContainer() {
  const dispatch = useAppDispatch();
  const period = useAppSelector((state) => state.period.period);
  const { data, isFetching, error } = useGetArticlesQuery(period);

  if (isFetching) return <Loading />;

  
  if (error) return <Error error={`Error fetching data: ${error}`} />;

  const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPeriod(Number(e.target.value)));
  };

  return (
    <div className='p-4'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Most Popular Articles</h2>
        <select onChange={handlePeriodChange} value={period}>
          <option value={1}>Last 1 Day</option>
          <option value={7}>Last 7 Days</option>
          <option value={30}>Last 30 Days</option>
        </select>
      </div>
      <ArticlesList articles={data?.results} />
    </div>
  );
}
