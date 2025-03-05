import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const ArticlesPage = lazy(() => import('../pages/ArticlesPage'));
const ArticlePage = lazy(() => import('../pages/ArticlePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const router = createBrowserRouter([
  { path: '/', element: <ArticlesPage /> },
  { path: '/article/:id', element: <ArticlePage /> },
  { path: '*', element: <NotFoundPage /> },
]);
