define(['react', 'big.js'], (function (react, Big) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Big__default = /*#__PURE__*/_interopDefaultLegacy(Big);

    function NumberIncrement({
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
      const [currentValue, setCurrentValue] = react.useState(null);
      const [disabledValue, setDisabledValue] = react.useState(false);
      react.useEffect(() => {
        if (inputAttr.status === "available" && currentValue === null) {
          setCurrentValue(Number(inputAttr.displayValue));
        } else if (currentValue) {
          inputAttr.setValue(Big__default["default"](currentValue));
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
          inputAttr.setValue(Big__default["default"](maxNumber));
        } else if (event.target.value <= minNumber) {
          setCurrentValue(minNumber);
          inputAttr.setValue(Big__default["default"](minNumber));
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
          inputAttr.setValue(Big__default["default"](minNumber));
        } else {
          setCurrentValue(currentValue - stepInterval);
          inputAttr.setValue(Big__default["default"](currentValue - stepInterval));
        }
        handleOnChange();
      }
      if (disabledValue && disabledValue === true && readOnlyStyle === "text") {
        return react.createElement("div", {
          className: `number-widget ${style}`
        }, react.createElement("p", {
          className: `${widgetName} form-control-static`
        }, currentValue, inputType));
      } else {
        return react.createElement("div", {
          className: `number-widget ${style}`
        }, react.createElement("input", {
          id: id,
          className: `${widgetName} form-control ${inputType && "has-type"}`,
          type: "number",
          onChange: onChangeInput,
          value: currentValue,
          disabled: disabledValue
        }), react.createElement("div", {
          className: "number-widget-buttons"
        }, disabledValue === false && react.createElement("button", {
          className: "increment",
          onClick: onIncrement,
          tabIndex: "-1"
        }, "+"), disabledValue === false && react.createElement("button", {
          className: "decrement",
          onClick: onDecrement,
          tabIndex: "-1"
        }, "-")), inputType && react.createElement("div", {
          className: "number-widget-type"
        }, inputType));
      }
    }

    return NumberIncrement;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVySW5jcmVtZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvTnVtYmVySW5jcmVtZW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3VpL051bWJlckluY3JlbWVudC5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCaWcgZnJvbSBcImJpZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJJbmNyZW1lbnQoe1xuICAgIGlucHV0QXR0cixcbiAgICBpbnB1dFR5cGUsXG4gICAgaW50ZXJ2YWwsXG4gICAgbWF4TnVtYmVyLFxuICAgIG1pbk51bWJlcixcbiAgICBvbkNoYW5nZSxcbiAgICByZWFkT25seVN0eWxlLFxuICAgIC4uLnJlc3Rcbn0pIHtcbiAgICBjb25zdCBpZCA9IHJlc3QuaWQgfHwgXCJcIjtcbiAgICBjb25zdCBzdHlsZSA9IHJlc3QuY2xhc3MgfHwgXCJcIjtcbiAgICBjb25zdCB3aWRnZXROYW1lID0gcmVzdC5uYW1lIHx8IFwiXCI7XG4gICAgY29uc3Qgc3RlcEludGVydmFsID0gTnVtYmVyKGludGVydmFsKTtcbiAgICBjb25zdCBbY3VycmVudFZhbHVlLCBzZXRDdXJyZW50VmFsdWVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Rpc2FibGVkVmFsdWUsIHNldERpc2FibGVkVmFsdWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0QXR0ci5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIgJiYgY3VycmVudFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VmFsdWUoTnVtYmVyKGlucHV0QXR0ci5kaXNwbGF5VmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlucHV0QXR0ci5zZXRWYWx1ZShCaWcoY3VycmVudFZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXRBdHRyLnN0YXR1cyA9PT0gXCJhdmFpbGFibGVcIiAmJiBpbnB1dEF0dHIucmVhZE9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNldERpc2FibGVkVmFsdWUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFZhbHVlLCBpbnB1dEF0dHJdKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uQ2hhbmdlKCkge1xuICAgICAgICBpZiAob25DaGFuZ2UgJiYgb25DaGFuZ2UuY2FuRXhlY3V0ZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UuZXhlY3V0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DaGFuZ2VJbnB1dChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID49IG1heE51bWJlcikge1xuICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKG1heE51bWJlcik7XG4gICAgICAgICAgICBpbnB1dEF0dHIuc2V0VmFsdWUoQmlnKG1heE51bWJlcikpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA8PSBtaW5OdW1iZXIpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShtaW5OdW1iZXIpO1xuICAgICAgICAgICAgaW5wdXRBdHRyLnNldFZhbHVlKEJpZyhtaW5OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlT25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkluY3JlbWVudCgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSArIHN0ZXBJbnRlcnZhbCA+PSBtYXhOdW1iZXIpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShtYXhOdW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q3VycmVudFZhbHVlKGN1cnJlbnRWYWx1ZSArIHN0ZXBJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlT25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRlY3JlbWVudCgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAtIHN0ZXBJbnRlcnZhbCA8PSBtaW5OdW1iZXIpIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShtaW5OdW1iZXIpO1xuICAgICAgICAgICAgaW5wdXRBdHRyLnNldFZhbHVlKEJpZyhtaW5OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRWYWx1ZShjdXJyZW50VmFsdWUgLSBzdGVwSW50ZXJ2YWwpO1xuICAgICAgICAgICAgaW5wdXRBdHRyLnNldFZhbHVlKEJpZyhjdXJyZW50VmFsdWUgLSBzdGVwSW50ZXJ2YWwpKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVPbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZFZhbHVlICYmIGRpc2FibGVkVmFsdWUgPT09IHRydWUgJiYgcmVhZE9ubHlTdHlsZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbnVtYmVyLXdpZGdldCAke3N0eWxlfWB9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7d2lkZ2V0TmFtZX0gZm9ybS1jb250cm9sLXN0YXRpY2B9PlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRUeXBlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG51bWJlci13aWRnZXQgJHtzdHlsZX1gfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3dpZGdldE5hbWV9IGZvcm0tY29udHJvbCAke2lucHV0VHlwZSAmJiBcImhhcy10eXBlXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWRWYWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyLXdpZGdldC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZFZhbHVlID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImluY3JlbWVudFwiIG9uQ2xpY2s9e29uSW5jcmVtZW50fSB0YWJJbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtkaXNhYmxlZFZhbHVlID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlY3JlbWVudFwiIG9uQ2xpY2s9e29uRGVjcmVtZW50fSB0YWJJbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2lucHV0VHlwZSAmJiA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci13aWRnZXQtdHlwZVwiPntpbnB1dFR5cGV9PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIk51bWJlckluY3JlbWVudCIsImlucHV0QXR0ciIsImlucHV0VHlwZSIsImludGVydmFsIiwibWF4TnVtYmVyIiwibWluTnVtYmVyIiwib25DaGFuZ2UiLCJyZWFkT25seVN0eWxlIiwicmVzdCIsImlkIiwic3R5bGUiLCJjbGFzcyIsIndpZGdldE5hbWUiLCJuYW1lIiwic3RlcEludGVydmFsIiwiTnVtYmVyIiwiY3VycmVudFZhbHVlIiwic2V0Q3VycmVudFZhbHVlIiwidXNlU3RhdGUiLCJkaXNhYmxlZFZhbHVlIiwic2V0RGlzYWJsZWRWYWx1ZSIsInVzZUVmZmVjdCIsInN0YXR1cyIsImRpc3BsYXlWYWx1ZSIsInNldFZhbHVlIiwiQmlnIiwicmVhZE9ubHkiLCJoYW5kbGVPbkNoYW5nZSIsImNhbkV4ZWN1dGUiLCJleGVjdXRlIiwib25DaGFuZ2VJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkluY3JlbWVudCIsIm9uRGVjcmVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ0YWJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSWUsU0FBU0EsZUFBZUEsQ0FBQztNQUNwQ0MsU0FBUztNQUNUQyxTQUFTO01BQ1RDLFFBQVE7TUFDUkMsU0FBUztNQUNUQyxTQUFTO01BQ1RDLFFBQVE7TUFDUkMsYUFBYTtNQUNiLEdBQUdDLElBQUFBO0lBQ1AsQ0FBQyxFQUFFO0lBQ0MsRUFBQSxNQUFNQyxFQUFFLEdBQUdELElBQUksQ0FBQ0MsRUFBRSxJQUFJLEVB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
