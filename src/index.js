import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Mypage from "./pages/Mypage";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindProject from "./pages/FindProject";
import FindFellows from "./pages/FindFellows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <FindProject />,
  },
  {
    path: "/fellows",
    element: <FindFellows />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
