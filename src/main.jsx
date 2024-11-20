import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Books from './routes/Books';
import BookDetails from './routes/BookDetails';
import Quotes from './routes/Quotes';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'books', element: <Books /> },
      { path: 'books/:id', element: <BookDetails /> },
      { path: 'quotes', element: <Quotes /> },
    ],
  },
]);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
