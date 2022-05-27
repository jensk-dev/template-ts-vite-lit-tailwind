import { html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { TailwindElement } from "../tailwind-element";
import styleSheet from "./styles.css";

/**
 * ButtonElement is a sub-class of TailwindElement,
 * thereby containing all classes that can be used from tailwind.
 * Futhermore, ButtonElement defines its own styles.css file which contains
 * the @apply syntax to bundle multiple tailwind css classes into one custom defined class.
 */
@customElement("button-element")
export class ButtonElement extends TailwindElement {
  public static styles = [...TailwindElement.styles, unsafeCSS(styleSheet)]

  @state()
  public count: number = 0;

  private clickHandler() {
    this.count++;
  }

  public render() {
    return html`
      <button @click="${this.clickHandler}" class="text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 border border-slate-50 rounded p-3">Welcome to Vite with Lit & Tailwind x${this.count}</button>
    `;
  }
}