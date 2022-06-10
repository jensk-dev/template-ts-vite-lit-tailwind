import { TailwindElement } from "../tailwind-element/tailwind-element";
/**
 * ButtonElement is a sub-class of TailwindElement,
 * thereby containing all classes that can be used from tailwind.
 */
export declare class ButtonElement extends TailwindElement {
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private clickHandler;
}
