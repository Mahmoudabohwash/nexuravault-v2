import { creator } from "../../../Utils.js";

export function createButton(text, type="primary") {
    const button =
        creator("button", `buttonstyle ${type}`);
        button.textContent = text;

     return button;
}
