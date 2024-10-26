// js/main.js
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { renderFeaturedPortfolioList } from './components/featuredPortfolio.js';
import { renderPortfolioList } from './components/portfolio.js';
import { renderProductList } from './components/product.js';
import { renderJoinUsSection } from './components/joinUs.js';
import { createContactIcons } from './components/contactIcons.js';

document.addEventListener('DOMContentLoaded', () => {
    createHeader();
    renderFeaturedPortfolioList();
    renderPortfolioList();
    renderProductList();
    renderJoinUsSection();
    createContactIcons();
    createFooter();
});
