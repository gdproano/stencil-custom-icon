/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomIcon {
        /**
          * The name of the icon
         */
        "name": string;
        /**
          * The size of the icon
         */
        "size": string;
    }
}
declare global {
    interface HTMLCustomIconElement extends Components.CustomIcon, HTMLStencilElement {
    }
    var HTMLCustomIconElement: {
        prototype: HTMLCustomIconElement;
        new (): HTMLCustomIconElement;
    };
    interface HTMLElementTagNameMap {
        "custom-icon": HTMLCustomIconElement;
    }
}
declare namespace LocalJSX {
    interface CustomIcon {
        /**
          * The name of the icon
         */
        "name"?: string;
        /**
          * The size of the icon
         */
        "size"?: string;
    }
    interface IntrinsicElements {
        "custom-icon": CustomIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-icon": LocalJSX.CustomIcon & JSXBase.HTMLAttributes<HTMLCustomIconElement>;
        }
    }
}
