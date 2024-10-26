// js/components/footer.js
import { insertHTML } from '../utils/render.js';

export function createFooter() {
    const footerHTML = `
        <nav>
            <ul style="display: flex;">
                ${createFooterIcon("https://www.instagram.com/lee_871116", "fa-brands fa-instagram")}
                ${createFooterIcon("https://www.youtube.com/channel/UCdFWtSFizZFpBovsUY7ZKyg", "fa-brands fa-youtube")}
                ${createFooterIcon("https://github.com/jj2016025j", "fa-brands fa-github")}
                ${createFooterIcon("https://www.pixiv.net/users/73132253", "fa-brands fa-pixiv")}
                ${createFooterIcon("mailto:ruoxi2002@gmail.com", "fa-brands fa-google")}
                ${createFooterIcon("mailto:jj2016025j@gmail.com", "fa-solid fa-envelope")}
                ${createFooterIcon("mailto:0971003199", "fa-solid fa-phone")}
                ${createFooterIcon("https://www.cakeresume.com/jj2016025j", "fa-regular fa-file")}
                ${createFooterIcon("https://www.linkedin.com/in/%E5%BB%BA%E9%99%9E-%E6%9D%8E-3145931b2/", "fa-brands fa-linkedin")}
                ${createFooterIcon("line://ti/p/20161116", "fa-brands fa-line", "LINE")}
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

function createFooterIcon(href, iconClass) {
    return `
        <li><a href="${href}"><i class="${iconClass} fa-lg"></i></a></li>
    `;
}

function createFooterLink(href, text) {
    return `
        <li><a href="${href}"><h5>${text}</h5></a></li>
    `;
}
