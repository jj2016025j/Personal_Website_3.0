// js/components/footer.js
import { insertHTML } from '../utils/render.js';

export function createFooter() {
    const footerHTML = `
        <nav>
            <ul style="display: flex;">
                ${createFooterIcon("#", "fa-brands fa-youtube")}
                ${createFooterIcon("#", "fa-brands fa-github")}
                ${createFooterIcon("#", "fa-brands fa-instagram")}
                ${createFooterIcon("#", "fa-brands fa-linkedin")}
                ${createFooterIcon("#", "fa-brands fa-google")}
                ${createFooterIcon("#", "fa-solid fa-envelope")}
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
