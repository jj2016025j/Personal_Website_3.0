// js/components/header.js
import { insertHTML } from '../utils/render.js';

export function createHeader() {
    const headerHTML = `
        <nav>
            <ul class="gap-50">
                ${createNavItem("/", "首頁")}
                ${createNavItem("/static/html/portfolio.html", "我的作品")}
                ${createNavItem("/static/html/product.html", "我的服務")}
                ${createNavItem("/static/html/team.html", "團隊招募")}
                ${createNavItem("/static/html/aboutus.html", "關於我")}
                ${createNavItem("/static/html/contentus.html", "聯絡我們")}
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
