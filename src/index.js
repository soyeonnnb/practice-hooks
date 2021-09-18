import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// UseState
import UseInputApp from "./useState/UseInput";
import UseTabsApp from "./useState/UseTabs";

ReactDOM.render(
  <React.StrictMode>
    <UseInputApp />
    <UseTabsApp />
  </React.StrictMode>,
  document.getElementById("root")
);
