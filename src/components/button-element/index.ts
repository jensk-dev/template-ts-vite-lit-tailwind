import { html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../tailwind-element";
import styleSheet from "./styles.css";

/**
 * ButtonElement is a sub-class of TailwindElement,
 * thereby containing all classes that can be used from tailwind.
 * Futhermor, ButtonElement defines its own styles.css file which contains
 * the @apply syntax to bundle multiple tailwind css classes into one custom defined class.
 */
@customElement("button-element")
export class ButtonElement extends TailwindElement {
  public static styles = [...TailwindElement.styles, unsafeCSS(styleSheet)]

  private clickHandler() {
    alert("Lit Works!");
  }

  public render() {
    return html`
      <button @click="${this.clickHandler}" class="text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 border border-slate-50 rounded p-3">Welcome to Vite with Lit & Tailwind</button>
    `;
  }
}