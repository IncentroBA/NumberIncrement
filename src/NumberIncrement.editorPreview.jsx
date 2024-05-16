import { createElement } from "react";

export function preview({ inputAttr }) {
    return <div className="form-control number-increment">[{inputAttr}]</div>;
}

export function getPreviewCss() {
    return require("./ui/NumberIncrement.css");
}
