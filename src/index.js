import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Projects from './Projects';
import ProjectDescription, {loader as projectLoader} from './ProjectDescription';
import ContactScreen from './ContactScreen';
import {action as indexAction} from './components/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects/",
    element: <Projects />,
    errorElement: <ErrorPage />
  },
  {
    path: "projects/:projectId",
    element: <ProjectDescription />,
    errorElement: <ErrorPage />,
    loader: projectLoader
  },
  {
    path: "contact/",
    element: <ContactScreen />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
