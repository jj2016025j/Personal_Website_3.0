// js/components/featuredPortfolio.js
import { renderList } from '../utils/render.js';

function createFeaturedPortfolioItem(item) {
    return `
        <li>
            <a href="/static/html/checkportfolio.html" class="featured-portfolio">
                <img class="featured-portfolio-img" src="${item.imgSrc}" alt="${item.title}">
                <div class="featured-portfolio-content">
                    <div class="title-time-flex-start">
                        <h6 class="text-gray">${item.date}</h6>
                        <h4 class="text-black">${item.title}</h4>
                    </div>
                    <h6 class="text-gray">${item.description}</h6>
                </div>
            </a>
        </li>
    `;
}

export function renderFeaturedPortfolioList() {
    const featuredPortfolioItems = [
        {
            date: '2024-10-25',
            title: 'CyberPunk電馭叛客2077-蕾貝卡',
            description: '「自小熱愛創新與挑戰，李建陞涉足遊戲開發...」',
            imgSrc: '/static/images/00164-2396053275-0000.png',
        },
        {
            date: '2024-10-25',
            title: '我推的孩子-星野愛',
            description: '「自小熱愛創新與挑戰，李建陞涉足遊戲開發...」',
            imgSrc: '/static/images/00201-2639187276-0000.png',
        }
    ];

    renderList('#featured-portfolio-list', featuredPortfolioItems, createFeaturedPortfolioItem);
}
