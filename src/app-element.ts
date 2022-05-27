import { html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "./components/tailwind-element";

// asynchronously load all elements here for optimal bundling.
import("./components/button-element");

@customElement("app-element")
export class RootElement extends TailwindElement {
  protected render(): TemplateResult {
    return html`
      <div class="w-screen h-screen flex justify-center items-center">
        <button-element></button-element>
      </div>
    `;
  }
}
