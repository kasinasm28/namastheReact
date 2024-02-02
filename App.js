import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"Hello World 1"), React.createElement("h2", {}, "Hello World 2")]
    )
)
// const heading= React.createElement("h1", {id: "heading", xyz:"abc"}, "Hello World From React");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);