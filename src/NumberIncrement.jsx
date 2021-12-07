import "./ui/NumberIncrement.css";
import { createElement, useEffect, useState } from "react";
import Big from "big.js";

export default function NumberIncrement({
    interval,
    inputAttr,
    inputType,
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
    const [currentValue, setCurrentValue] = useState(null);
    const [disabledValue, setDisabledValue] = useState(false);

    useEffect(() => {
        if (inputAttr.status === "available" && currentValue === null) {
            setCurrentValue(Number(inputAttr.displayValue));
        } else if (currentValue) {
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
        if (event.target.value >= maxNumber) {
            setCurrentValue(maxNumber);
            inputAttr.setValue(Big(maxNumber));
        } else if (event.target.value <= minNumber) {
            setCurrentValue(minNumber);
            inputAttr.setValue(Big(minNumber));
        } else {
            setCurrentValue(Number(event.target.value));
        }
        handleOnChange();
    }

    function onIncrement() {
        if (currentValue + stepInterval >= maxNumber) {
            setCurrentValue(maxNumber);
        } else {
            setCurrentValue(currentValue + stepInterval);
        }
        handleOnChange();
    }

    function onDecrement() {
        if (currentValue - stepInterval <= minNumber) {
            setCurrentValue(minNumber);
            inputAttr.setValue(Big(minNumber));
        } else {
            setCurrentValue(currentValue - stepInterval);
            inputAttr.setValue(Big(currentValue - stepInterval));
        }
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
