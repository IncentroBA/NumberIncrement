import { createElement } from "react";

export function preview({ inputAttr, inputType }) {
    return (
        <div className="number-widget">
            <div className={`form-control number-increment ${inputType && "has-type"}`}>[{inputAttr}]</div>
            <div className="number-widget-buttons">
                <button className="increment">+</button>
                <button className="decrement">-</button>
            </div>
            {inputType && <div className="number-widget-type">{inputType}</div>}
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/NumberIncrement.css");
}
