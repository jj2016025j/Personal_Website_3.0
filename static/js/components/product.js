// js/components/product.js
import { renderList } from '../utils/render.js';

// Product 獨立的模板
function createProductCard(product) {
    return `
        <li class="product-card">
            <img class="product-card-img" src="${product.imgSrc}" alt="${product.name}">
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <h4>${product.price}</h4>
                <div class="btn btn-square btn-outline-black">
                    <h6>購買</h6>
                </div>
            </div>
        </li>
    `;
}

export function renderProductList() {
    const products = [
        {
            name: 'CyberPunk電馭叛客2077-蕾貝卡',
            price: 'NT$ 1,099',
            imgSrc: '/static/images/00164-2396053275-0000.png',
        },
        {
            name: '外國人模型-黃色外套',
            price: 'NT$ 245',
            imgSrc: '/static/images/00000-4201842700-0000.png',
        },
        {
            name: '我推的孩子-星野愛',
            price: 'NT$ 699',
            imgSrc: '/static/images/00201-2639187276-0000.png',
        }
    ];

    renderList('#product-list', products, createProductCard);
}
