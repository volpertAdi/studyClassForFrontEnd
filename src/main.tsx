import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

//pages
import CreatePage from './pages/Create/create.tsx'
import StudentsListPage from './pages/StudentsList/studentsList.tsx'
import ClassroomsPage from './pages/ClassRoomList/ClassroomList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/users" replace /> },
      { path: "users", element: <StudentsListPage /> },
      { path: "classes", element: <ClassroomsPage />},
      { path: "edit", element: <CreatePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)