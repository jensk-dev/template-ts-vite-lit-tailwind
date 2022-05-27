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
  public static styles = [...TailwindElement.styles, unsafeCSS(styleSheet)];

  @state()
  public count: number = 0;

  public render() {
    return html`
      <button
        @click="${this.clickHandler}"
        class="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out duration-100"
      >
        Welcome to Vite with Lit & Tailwind (x${this.count})
      </button>
    `;
  }

  private clickHandler() {
    this.count++;
  }
}
