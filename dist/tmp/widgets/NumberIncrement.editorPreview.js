'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".number-widget {\n    display: grid;\n    flex: 1;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr auto auto;\n    position: relative;\n}\n\n.number-widget .form-control {\n    grid-area: 1 / 1 / 1 / 3;\n    padding-right: 55px;\n}\n\n.number-widget .form-control.has-type {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.number-widget input::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.number-widget input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.number-widget input {\n    -moz-appearance: textfield;\n}\n\n.number-widget-buttons {\n    grid-area: 1 / -1 / 1 / 3;\n    margin: 6px;\n    place-self: end;\n}\n\n.number-widget .increment {\n    margin-right: 4px;\n}\n\n.number-widget .increment,\n.number-widget .decrement {\n    border: solid 1px var(--input-border, #cdcdcd);\n    border-radius: 4px;\n    background-color: white;\n    padding: 2px 8px;\n}\n\n.number-widget .increment:hover,\n.number-widget .decrement:hover {\n    border-color: var(--brand-primary, #ffa500);\n}\n\n.number-widget .number-widget-type {\n    background-color: white;\n    border: solid 1px var(--input-border, #cdcdcd);\n    border-left: 0;\n    border-radius: 0 4px 4px 0;\n    padding: 8px;\n}\n\n.number-widget .form-control-static {\n    border: solid 1px transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bWJlckluY3JlbWVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhDQUE4QztJQUM5QyxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoiTnVtYmVySW5jcmVtZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXItd2lkZ2V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZsZXg6IDE7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIGF1dG8gYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5udW1iZXItd2lkZ2V0IC5mb3JtLWNvbnRyb2wge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcbiAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xufVxuXG4ubnVtYmVyLXdpZGdldCAuZm9ybS1jb250cm9sLmhhcy10eXBlIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLm51bWJlci13aWRnZXQgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5udW1iZXItd2lkZ2V0IGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubnVtYmVyLXdpZGdldCBpbnB1dCB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5udW1iZXItd2lkZ2V0LWJ1dHRvbnMge1xuICAgIGdyaWQtYXJlYTogMSAvIC0xIC8gMSAvIDM7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgcGxhY2Utc2VsZjogZW5kO1xufVxuXG4ubnVtYmVyLXdpZGdldCAuaW5jcmVtZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLm51bWJlci13aWRnZXQgLmluY3JlbWVudCxcbi5udW1iZXItd2lkZ2V0IC5kZWNyZW1lbnQge1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWlucHV0LWJvcmRlciwgI2NkY2RjZCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG59XG5cbi5udW1iZXItd2lkZ2V0IC5pbmNyZW1lbnQ6aG92ZXIsXG4ubnVtYmVyLXdpZGdldCAuZGVjcmVtZW50OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnksICNmZmE1MDApO1xufVxuXG4ubnVtYmVyLXdpZGdldCAubnVtYmVyLXdpZGdldC10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pbnB1dC1ib3JkZXIsICNjZGNkY2QpO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLm51bWJlci13aWRnZXQgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xufVxuIl19 */";
var stylesheet=".number-widget {\n    display: grid;\n    flex: 1;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr auto auto;\n    position: relative;\n}\n\n.number-widget .form-control {\n    grid-area: 1 / 1 / 1 / 3;\n    padding-right: 55px;\n}\n\n.number-widget .form-control.has-type {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.number-widget input::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.number-widget input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n.number-widget input {\n    -moz-appearance: textfield;\n}\n\n.number-widget-buttons {\n    grid-area: 1 / -1 / 1 / 3;\n    margin: 6px;\n    place-self: end;\n}\n\n.number-widget .increment {\n    margin-right: 4px;\n}\n\n.number-widget .increment,\n.number-widget .decrement {\n    border: solid 1px var(--input-border, #cdcdcd);\n    border-radius: 4px;\n    background-color: white;\n    padding: 2px 8px;\n}\n\n.number-widget .increment:hover,\n.number-widget .decrement:hover {\n    border-color: var(--brand-primary, #ffa500);\n}\n\n.number-widget .number-widget-type {\n    background-color: white;\n    border: solid 1px var(--input-border, #cdcdcd);\n    border-left: 0;\n    border-radius: 0 4px 4px 0;\n    padding: 8px;\n}\n\n.number-widget .form-control-static {\n    border: solid 1px transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk51bWJlckluY3JlbWVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhDQUE4QztJQUM5QyxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoiTnVtYmVySW5jcmVtZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXItd2lkZ2V0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZsZXg6IDE7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyIGF1dG8gYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5udW1iZXItd2lkZ2V0IC5mb3JtLWNvbnRyb2wge1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gMztcbiAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xufVxuXG4ubnVtYmVyLXdpZGdldCAuZm9ybS1jb250cm9sLmhhcy10eXBlIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLm51bWJlci13aWRnZXQgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5udW1iZXItd2lkZ2V0IGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubnVtYmVyLXdpZGdldCBpbnB1dCB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5udW1iZXItd2lkZ2V0LWJ1dHRvbnMge1xuICAgIGdyaWQtYXJlYTogMSAvIC0xIC8gMSAvIDM7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgcGxhY2Utc2VsZjogZW5kO1xufVxuXG4ubnVtYmVyLXdpZGdldCAuaW5jcmVtZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLm51bWJlci13aWRnZXQgLmluY3JlbWVudCxcbi5udW1iZXItd2lkZ2V0IC5kZWNyZW1lbnQge1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWlucHV0LWJvcmRlciwgI2NkY2RjZCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG59XG5cbi5udW1iZXItd2lkZ2V0IC5pbmNyZW1lbnQ6aG92ZXIsXG4ubnVtYmVyLXdpZGdldCAuZGVjcmVtZW50OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJyYW5kLXByaW1hcnksICNmZmE1MDApO1xufVxuXG4ubnVtYmVyLXdpZGdldCAubnVtYmVyLXdpZGdldC10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pbnB1dC1ib3JkZXIsICNjZGNkY2QpO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLm51bWJlci13aWRnZXQgLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICAgIGJvcmRlcjogc29saWQgMXB4IHRyYW5zcGFyZW50O1xufVxuIl19 */";
styleInject(css_248z);

var NumberIncrement = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(NumberIncrement);

function preview() {
  return react.createElement("div", {
    className: "number-increment"
  }, "Number increment");
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVySW5jcmVtZW50LmVkaXRvclByZXZpZXcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi9zcmMvTnVtYmVySW5jcmVtZW50LmVkaXRvclByZXZpZXcuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHN0eWxlSW5qZWN0KGNzcywgcmVmKSB7XG4gIGlmICggcmVmID09PSB2b2lkIDAgKSByZWYgPSB7fTtcbiAgdmFyIGluc2VydEF0ID0gcmVmLmluc2VydEF0O1xuXG4gIGlmICghY3NzIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gIGlmIChpbnNlcnRBdCA9PT0gJ3RvcCcpIHtcbiAgICBpZiAoaGVhZC5maXJzdENoaWxkKSB7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShzdHlsZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVJbmplY3Q7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2aWV3KCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1pbmNyZW1lbnRcIj5OdW1iZXIgaW5jcmVtZW50PC9kaXY+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvTnVtYmVySW5jcmVtZW50LmNzc1wiKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZXZpZXciLCJnZXRQcmV2aWV3Q3NzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUM3QixNQUFLQSxHQUFHLEtBQUssS0FBSyxDQUFsQixFQUFzQkEsR0FBRyxHQUFHLEVBQU47QUFDdEIsTUFBSUMsUUFBUSxHQUFHRCxHQUFHLENBQUNDLFFBQW5COztBQUVBLE1BQUksQ0FBQ0YsR0FBRCxJQUFRLE9BQU9HLFFBQVAsS0FBb0IsV0FBaEMsRUFBNkM7QUFBRTtBQUFTOztBQUV4RCxNQUFJQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0MsSUFBVCxJQUFpQkQsUUFBUSxDQUFDRSxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUE1QjtBQUNBLE1BQUlDLEtBQUssR0FBR0gsUUFBUSxDQUFDSSxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQUQsRUFBQUEsS0FBSyxDQUFDRSxJQUFOLEdBQWEsVUFBYjs7QUFFQSxNQUFJTixRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDdEIsUUFBSUUsSUFBSSxDQUFDSyxVQUFULEVBQXFCO0FBQ25CTCxNQUFBQSxJQUFJLENBQUNNLFlBQUwsQ0FBa0JKLEtBQWxCLEVBQXlCRixJQUFJLENBQUNLLFVBQTlCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xMLE1BQUFBLElBQUksQ0FBQ08sV0FBTCxDQUFpQkwsS0FBakI7QUFDRDtBQUNGLEdBTkQsTUFNTztBQUNMRixJQUFBQSxJQUFJLENBQUNPLFdBQUwsQ0FBaUJMLEtBQWpCO0FBQ0Q7O0FBRUQsTUFBSUEsS0FBSyxDQUFDTSxVQUFWLEVBQXNCO0FBQ3BCTixJQUFBQSxLQUFLLENBQUNNLFVBQU4sQ0FBaUJDLE9BQWpCLEdBQTJCYixHQUEzQjtBQUNELEdBRkQsTUFFTztBQUNMTSxJQUFBQSxLQUFLLENBQUNLLFdBQU4sQ0FBa0JSLFFBQVEsQ0FBQ1csY0FBVCxDQUF3QmQsR0FBeEIsQ0FBbEI7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7OztBQ3ZCTSxTQUFTZSxPQUFULEdBQW1CO0FBQ3RCLFNBQU9SO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZix3QkFBUDtBQUNIO0FBRU0sU0FBU1MsYUFBVCxHQUF5QjtBQUM1QixTQUFPQyxVQUFQO0FBQ0g7Ozs7OyJ9