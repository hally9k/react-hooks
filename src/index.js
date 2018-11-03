// @flow
import React from "react";
import ReactDom from "react-dom";
import App from "./app.jsx";

const rootElement = document.getElementById("root");
rootElement ? ReactDom.render(<App />, rootElement) : null;
