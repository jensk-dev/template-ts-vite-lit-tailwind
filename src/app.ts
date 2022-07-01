import { html, render } from "lit";

const deps = [
  import("./app-element"),
  import("./boilerplate/tailwind-element/tailwind-element"), // preemptively split tailwind because it might become a large chunk
];

Promise.all(deps).then(() => {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("Root element was not found");
  }

  render(html`<app-element></app-element>`, root);
});
