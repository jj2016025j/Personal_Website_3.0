// js/utils/render.js
export function renderList(selector, items, createItemFn) {
    const list = document.querySelector(selector);
    if (list) {
        list.innerHTML = items.map(createItemFn).join('');
    }
}

export function insertHTML(selector, htmlContent) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = htmlContent;
    }
}
