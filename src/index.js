import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// UseState
import AppBetter from "./useState/AppUgly";
import UseInputApp from "./useState/UseInput";
import UseTabsApp from "./useState/UseTabs";

// UseEffect
import UseTitleApp from "./useEffect/UseTitle";
import UseClickApp from "./useEffect/UseClick";
import UseConfirmApp from "./useEffect/UseConfirm";
import UsePreventLeaveApp from "./useEffect/UsePreventLeave";
import UseBeforeLeaveApp from "./useEffect/UseBeforeLeave";
import UseFadeInApp from "./useEffect/UseFadeIn";
import UseNetworkApp from "./useEffect/UseNetwork";
import UseScrollApp from "./useEffect/UseScroll";
import UseFullscreenApp from "./useEffect/UseFullscreen";

ReactDOM.render(
  <React.StrictMode>
    {/* UseState */}
    <h1>"UseState"</h1>
    <AppBetter />
    <UseInputApp />
    <UseTabsApp />
    <br />
    <hr />
    {/* UseEffect */}
    <h1>"UseEffect"</h1>
    <UseTitleApp />
    <UseClickApp />
    <UseConfirmApp />
    <UsePreventLeaveApp />
    <UseBeforeLeaveApp />
    <UseFadeInApp />
    <UseNetworkApp />
    <UseScrollApp />
    <UseFullscreenApp />
  </React.StrictMode>,
  document.getElementById("root")
);
