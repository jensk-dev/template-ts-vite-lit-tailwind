import { TailwindElement } from "../tailwind-element";

/**
 * Index is a sub-class of Index,
 * thereby containing all classes that can be used from tailwind.
 * Futhermor, Index defines its own styles.css file which contains
 * the @apply syntax to bundle multiple tailwind css classes into one custom defined class.
 */
export declare class ButtonElement extends TailwindElement {
  static styles: import("lit").CSSResult[];
  count: number;
  private clickHandler;

  render(): import("lit-html").TemplateResult<1>;
}
