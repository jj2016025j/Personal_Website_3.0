import { insertHTML } from '../utils/render.js';

export function createHeader() {
    const headerHTML = `
        <header>
            <div class="nav-container">
                <div class="logo">
                    <ul class="gap-50">
                        ${createNavItem("#", "2024-10-27 V3.1")}
                    </ul>
                </div>
                <button class="burger" id="burger">
                    <i class="fa-brands fa-buffer"></i>
                </button>
                <nav class="nav-menu" id="nav-menu">
                    <ul class="gap-50">
                        ${createNavItem("./", "首頁")}
                        ${createNavItem("./portfolio.html", "我的作品")}
                        ${createNavItem("./product.html", "我的服務")}
                        ${createNavItem("./team.html", "團隊招募")}
                        ${createNavItem("./aboutus.html", "關於我")}
                        ${createNavItem("./contentus.html", "聯絡我們")}
                    </ul>
                </nav>
            </div>
        </header>
    `;
    insertHTML('header', headerHTML);

    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle menu visibility on burger click
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
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
