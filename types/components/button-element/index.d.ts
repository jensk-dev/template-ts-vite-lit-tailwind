import { TailwindElement } from "../tailwind-element";
/**
 * ButtonElement is a sub-class of TailwindElement,
 * thereby containing all classes that can be used from tailwind.
 * Futhermor, ButtonElement defines its own styles.css file which contains
 * the @apply syntax to bundle multiple tailwind css classes into one custom defined class.
 */
export declare class ButtonElement extends TailwindElement {
    static styles: import("lit").CSSResult[];
    private clickHandler;
    render(): import("lit").TemplateResult<1>;
}
