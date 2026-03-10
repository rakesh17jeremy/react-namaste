const parent = [
  React.createElement("h1", { id: "heading" }, "Hello World!"),
  React.createElement(
    "a",
    { href: "https://www.youtube.com/", target: "_blank" },
    "Youtube",
  ),
];
const divId = ReactDOM.createRoot(document.querySelector("#root"));
//divId.render(parent);


const divChild = [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello World!"),
    React.createElement(
      "a",
      { href: "https://www.youtube.com/", target: "_blank" },
      "Youtube",
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "heading" }, "Hello World!"),
    React.createElement(
      "a",
      { href: "https://www.youtube.com/", target: "_blank" },
      "Youtube",
    ),
  ]),
];
divId.render(divChild);
