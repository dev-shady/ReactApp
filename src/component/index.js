import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import Header from "./Header";
import Body from "./Body";

const AppComponent = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
