import { beforeEach, describe, it, expect } from 'vitest'
import {IWindow} from "happy-dom";

// Import the element
import "./index"
import {ButtonElement} from "./index";

// declare the global Window object to inherit from IWindow so the happyDom type is recognized on window
declare global {
    interface Window extends IWindow {}
}

describe("Button Element", async () => {
    beforeEach(async () => {
        // set the inner html element
        document.body.innerHTML = '<button-element></button-element>';
        // wait for happyDom to initialize
        await window.happyDOM.whenAsyncComplete();
    })

    it("contains a button", () => {
        const element = document.body.querySelector("button-element");
        const button = element?.shadowRoot?.querySelector("button");

        expect(button?.nodeName).toBe("BUTTON");
    })

    it("contains the correct information", () => {
        const element = document.body.querySelector("button-element");
        const text = element?.shadowRoot?.innerHTML;

        expect(text).toContain("Welcome to Vite with Lit & Tailwind");
    });

    it("increments count when clicked", async () => {
        const buttonElement = <ButtonElement>document.body.querySelector("button-element");
        const internalButton = <HTMLButtonElement>buttonElement?.shadowRoot?.querySelector("button");

        expect(buttonElement.count).toEqual(0);
        internalButton.click();
        expect(buttonElement.count).toEqual(1);
        expect(buttonElement.count).not.toEqual(3);
    })
})