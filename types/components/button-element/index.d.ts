import { TailwindElement } from "../tailwind-element";
/**
 * ButtonElement is a sub-class of TailwindElement,
 * thereby containing all classes that can be used from tailwind.
 * Futhermore, ButtonElement defines its own styles.css file which contains
 * the @apply syntax to bundle multiple tailwind css classes into one custom defined class.
 */
export declare class ButtonElement extends TailwindElement {
    static styles: import("lit").CSSResult[];
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private clickHandler;
}
