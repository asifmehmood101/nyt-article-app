import { Link } from 'react-router-dom';
import { ErrorProps } from '../../types';
export function Error({ error }: ErrorProps) {
  return (
    <div className='min-h-screen flex flex-grow items-center justify-center bg-gray-50'>
      <div className='rounded-lg bg-white p-8 text-center shadow-xl'>
        <h1 className='mb-4 text-4xl font-bold'>ERROR!!</h1>
        <p className='text-gray-600'>{error}</p>
        <Link
          to='/'
          className='mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600'
        >
          {' '}
          Go back to Home{' '}
        </Link>
      </div>
    </div>
  );
}
