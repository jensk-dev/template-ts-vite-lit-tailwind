import { IWindow } from "happy-dom";
import "./index";

declare global {
  interface Window extends IWindow {}
}
