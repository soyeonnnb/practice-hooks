import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// UseState
import AppBetter from "./useState/AppUgly";
import UseInputApp from "./useState/UseInput";
import UseTabsApp from "./useState/UseTabs";

// UseEffect
import UseTitleApp from "./useEffect/UseTitle";
ReactDOM.render(
  <React.StrictMode>
    {/* UseState */}
    <h1>UseState</h1>
    <AppBetter />
    <UseInputApp />
    <UseTabsApp />
    <br />
    {/* UseEffect */}
    <h1>UseEffect</h1>
    <UseTitleApp />
  </React.StrictMode>,
  document.getElementById("root")
);
