## NumberIncrement

Increment / decrement a number input with buttons on the side. Adjustable how much is added/removed at a time.

## Features

-   Set the interval in which rate the + and - buttons update the integer.
-   Display an inputType string that may clarify which kind of number it is about (EUR, %, $, kg, cm, ...).
-   Set a minimal Number. The widget doesn't allow decreasing the values beneath this number.
-   Set a maximum Number. The widget doesn't allow increasing the values above this number.
-   Set the attribute that is being influenced through this widget.
-   read-only style (`control`, `text`).

## Usage

Add this widget to your page and adjust features as desired. The only required thing is setting the Integer attribute.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
