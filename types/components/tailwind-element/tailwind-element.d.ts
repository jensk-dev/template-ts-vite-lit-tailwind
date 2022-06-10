import { LitElement } from "lit";
/**
 * tailwind is statically imported and thereby efficiently
 * exposed to all subclasses that require tailwind.
 * Furthermore, tailwind will automatically add additional styles
 * required by any other component using tailwind-defined styles.
 */
export declare class TailwindElement extends LitElement {
    static styles: import("lit").CSSResult[];
}
