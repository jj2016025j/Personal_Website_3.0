// js/components/header.js
import { insertHTML } from '../utils/render.js';

export function createHeader() {
    const headerHTML = `
        <nav>
            <ul class="gap-50">
                ${createNavItem("#", "2024-10-27 V3.1")}
                ${createNavItem("./", "首頁")}
                ${createNavItem("./portfolio.html", "我的作品")}
                ${createNavItem("./product.html", "我的服務")}
                ${createNavItem("./team.html", "團隊招募")}
                ${createNavItem("./aboutus.html", "關於我")}
                ${createNavItem("./contentus.html", "聯絡我們")}
            </ul>
        </nav>
    `;
    insertHTML('header', headerHTML);
}

function createNavItem(href, text) {
    return `
        <li class="btn-transparent-bg">
            <a href="${href}">
                <h6 class="text-white">${text}</h6>
            </a>
        </li>
    `;
}
