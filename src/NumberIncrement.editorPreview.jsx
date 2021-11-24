import { createElement } from "react";

export function preview() {
    return <div className="number-increment">Number increment</div>;
}

export function getPreviewCss() {
    return require("./ui/NumberIncrement.css");
}
