import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Mypage from "./pages/Mypage";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindProject from "./pages/FindProject";
import FindFellows from "./pages/FindFellows";
import Login from "./pages/Login";
import MakeProject from "./pages/MakeProject";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import Signup from "./pages/Signup";
import createSagaMiddleware from "redux-saga";
const router = createBrowserRouter([
  {
    path: "/test",
    element: <App />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
  {
    path: "/home",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <FindProject />,
  },
  {
    path: "/projects/make-project",
    element: <MakeProject />,
  },
  {
    path: "/fellows",
    element: <FindFellows />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
