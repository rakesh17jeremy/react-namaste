import React from "react";
import ReactDOM from "react-dom/client";

const jsxh = <h1>React course</h1>;

const Comp = () => (
  <div>
    {jsxh}
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsWRcoz1h2eUxA3KtKJhrsEtbDtN60dwJdg&s"
      alt="Harry Potter"
    />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Comp />);
