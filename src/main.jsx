import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
// import Hello from './Hello'
import CardList from "./CardList";
import "./index.css";
import { users } from "./placeholders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardList cardList={users} />
  </React.StrictMode>,
);
