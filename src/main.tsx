import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

//pages
import CreatePage from './pages/Create/create.tsx'
import StudentsListPage from './pages/StudentsList/studentsList.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "users", element: <StudentsListPage /> },
      // { path: "classes", element: <ClassesPage /> },
      { path: "edit", element: <CreatePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)