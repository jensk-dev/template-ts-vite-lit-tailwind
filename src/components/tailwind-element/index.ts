import { LitElement, unsafeCSS } from "lit";
import tailwind from "./tailwind.css"

/**
 * tailwind.css is statically imported and thereby efficiently
 * exposed to all subclasses that require tailwind.
 * Furthermore, tailwind will automatically add additional styles
 * required by any other component using tailwind-defined styles.
 */
export class TailwindElement extends LitElement {
  public static styles = [unsafeCSS(tailwind)]
}