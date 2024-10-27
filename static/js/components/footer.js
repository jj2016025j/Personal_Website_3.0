// js/components/footer.js
import { insertHTML } from '../utils/render.js';
import { createLineIcon } from './line.js';

// 手機是2、3可以，電腦是1、3可以

export function createFooter() {
    const items = [
        { href: "https://www.instagram.com/lee_871116", iconClass: "fa-brands fa-instagram", title: "Instagram" },
        { href: "https://www.youtube.com/channel/UCdFWtSFizZFpBovsUY7ZKyg", iconClass: "fa-brands fa-youtube", title: "YouTube" },
        { href: "https://github.com/jj2016025j", iconClass: "fa-brands fa-github", title: "GitHub" },
        { href: "https://www.pixiv.net/users/73132253", iconClass: "fa-brands fa-pixiv", title: "Pixiv" },
        { href: "mailto:ruoxi2002@gmail.com", iconClass: "fa-brands fa-google", title: "Google" },
        { href: "mailto:jj2016025j@gmail.com", iconClass: "fa-solid fa-envelope", title: "Email" },
        { href: "tel:0971003199", iconClass: "fa-solid fa-phone", title: "Phone" },
        { href: "https://www.cakeresume.com/jj2016025j", iconClass: "fa-regular fa-file", title: "Cakeresume" },
        { href: "https://www.linkedin.com/in/%E5%BB%BA%E9%99%9E-%E6%9D%8E-3145931b2/", iconClass: "fa-brands fa-linkedin", title: "LinkedIn" }
    ];
    const lineIcons = createLineIcon();
    items.push(...lineIcons);

    const footerHTML = `
        <nav>
            <ul style="display: flex;">
                ${items.map(item => createFooterIcon(item.href, item.iconClass, item.title)).join('')}
            </ul>
        </nav>
        <a href="#"><h5>Copyright©</h5></a>
        <nav>
            <ul style="display: flex;">
                ${createFooterLink("#", "隱私權政策")}
                ${createFooterLink("#", "銷售條款")}
                ${createFooterLink("#", "服務條款")}
            </ul>
        </nav>
    `;
    insertHTML('footer', footerHTML);
}

function createFooterIcon(href, iconClass, title) {
    return `
        <li><a href="${href}" title="${title}" target="_blank"><i class="${iconClass} fa-lg"></i></a></li>
    `;
}

function createFooterLink(href, text) {
    return `
        <li><a href="${href}"><h5>${text}</h5></a></li>
    `;
}
