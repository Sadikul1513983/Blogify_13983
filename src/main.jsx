import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "../src/input.css";
import App from "./App";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
