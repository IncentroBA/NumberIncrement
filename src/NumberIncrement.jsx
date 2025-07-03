import "./ui/NumberIncrement.css";
import { createElement, useEffect, useState } from "react";
import Big from "big.js";

export default function NumberIncrement({
    inputAttr,
    inputType,
    interval,
    maxNumber,
    minNumber,
    onChange,
    readOnlyStyle,
    ...rest
}) {
    const id = rest.id || "";
    const style = rest.class || "";
    const widgetName = rest.name || "";
    const stepInterval = Number(interval);
    const [currentValue, setCurrentValue] = useState("");
    const [disabledValue, setDisabledValue] = useState(false);

    useEffect(() => {
        if (inputAttr.status === "available" && currentValue === "") {
            setCurrentValue(String(inputAttr.displayValue));
        } else if (currentValue !== "") {
            inputAttr.setValue(Big(currentValue));
        }

        if (inputAttr.status === "available" && inputAttr.readOnly === true) {
            setDisabledValue(true);
        }
    }, [currentValue, inputAttr]);

    function handleOnChange() {
        if (onChange && onChange.canExecute) {
            onChange.execute();
        }
    }

    function onChangeInput(event) {
        let value = event.target.value;

        // Remove leading zeros (but keep "0" if that's the only digit)
        value = value.replace(/^0+(?=\d)/, "");
        setCurrentValue(value);

        const numValue = Number(value);

        if (numValue >= maxNumber) {
            setCurrentValue(String(maxNumber));
            inputAttr.setValue(Big(maxNumber));
        } else if (numValue <= minNumber) {
            setCurrentValue(String(minNumber));
            inputAttr.setValue(Big(minNumber));
        } else {
            inputAttr.setValue(Big(value));
        }
        handleOnChange();
    }

    function onIncrement() {
        const numValue = Number(currentValue) || 0;
        const newValue = Math.min(numValue + stepInterval, maxNumber);
        setCurrentValue(String(newValue));
        inputAttr.setValue(Big(newValue));
        handleOnChange();
    }

    function onDecrement() {
        const numValue = Number(currentValue) || 0;
        const newValue = Math.max(numValue - stepInterval, minNumber);
        setCurrentValue(String(newValue));
        inputAttr.setValue(Big(newValue));
        handleOnChange();
    }

    if (disabledValue && disabledValue === true && readOnlyStyle === "text") {
        return (
            <div className={`number-widget ${style}`}>
                <p className={`${widgetName} form-control-static`}>
                    {currentValue}
                    {inputType}
                </p>
            </div>
        );
    } else {
        return (
            <div className={`number-widget ${style}`}>
                <input
                    id={id}
                    className={`${widgetName} form-control ${inputType && "has-type"}`}
                    type="number"
                    onChange={onChangeInput}
                    value={currentValue}
                    disabled={disabledValue}
                />
                <div className="number-widget-buttons">
                    {disabledValue === false && (
                        <button className="increment" onClick={onIncrement} tabIndex="-1">
                            +
                        </button>
                    )}
                    {disabledValue === false && (
                        <button className="decrement" onClick={onDecrement} tabIndex="-1">
                            -
                        </button>
                    )}
                </div>
                {inputType && <div className="number-widget-type">{inputType}</div>}
            </div>
        );
    }
}
