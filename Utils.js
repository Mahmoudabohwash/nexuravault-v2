
export function creator(tag, className, text, img, alttext = "") {
    const el =
        document.createElement(tag);

    if (className) {
        el.className = className;
    }

    if (text) {
        el.textContent = text;
    }

    if (img) {
        el.src = img;
        el.alttext = alttext;

    }
    return el;
}
