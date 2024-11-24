import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GitApp } from './GitApp';
import { IssueView, ListView } from './issues/views';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const router = createBrowserRouter([
  {
    path: '/issues',
    element: <GitApp />,
    children: [
      { path: 'list', element: <ListView /> },
      { path: 'issue/:id', element: <IssueView /> },
      { path: '*', element: <Navigate to="/issues/list" /> },
    ],
  },
  {
    path: '/',
    element: <Navigate to="issues/list" />,
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
