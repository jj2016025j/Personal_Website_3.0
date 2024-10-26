// js/components/contactIcons.js

import { insertHTML } from '../utils/render.js';

export function createContactIcons() {
    const iconsHTML = `
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
    `;
    insertHTML('#contact-icons-section', iconsHTML);
}

function createFooterIcon(href, iconClass) {
    return `
        <li><a href="${href}"><i class="${iconClass} fa-lg"></i></a></li>
    `;
}
