import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from '../../types/index';

const API_KEY = import.meta.env.VITE_NYT_API_KEY;

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nytimes.com/svc/mostpopular/v2/viewed/',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<{ results: Article[] }, number>({
      query: (period) => `${period}.json?api-key=${API_KEY}`,
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
