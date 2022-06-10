import { LitElement, unsafeCSS } from "lit";
import components from "./components.css?inline";
import utilities from "./utilities.css?inline";
import screens from "./screens.css?inline";

// do not import this as inline, as it will break Tailwind's global css reset.
// (This file will effectively be imported twice. Once as a standalone css file, once as a string used in the tailwind element)
import preflight from "./preflight.css";

/**
 * tailwind is statically imported and thereby efficiently
 * exposed to all subclasses that require tailwind.
 * Furthermore, tailwind will automatically add additional styles
 * required by any other component using tailwind-defined styles.
 */
export class TailwindElement extends LitElement {
  public static styles = [unsafeCSS(preflight), unsafeCSS(components), unsafeCSS(utilities), unsafeCSS(screens)].filter(styles => styles.cssText !== ""); // set tailwind styles, prune unused ones
}
