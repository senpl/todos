import 'babel-polyfill';
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import Root from "./components/Root";
import configureStore from './configureStore';
// import Search from "./components/search";
const store=configureStore();

render(
  <Root store={store} />,
  
  document.getElementById("root")
);
