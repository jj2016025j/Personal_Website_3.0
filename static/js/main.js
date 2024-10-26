// js/main.js
import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { renderFeaturedPortfolioList } from './components/featuredPortfolio.js';
import { renderPortfolioList } from './components/portfolio.js';
import { renderProductList } from './components/product.js';
import { renderJoinUsSection } from './components/joinUs.js';
import { createContactIcons } from './components/contactIcons.js';
import { renderSkillList } from './components/skills.js';
import { renderJobList } from './components/jobs.js';

const base = document.createElement('base');
base.href = window.location.pathname.includes('Personal_Website_3.0')
    ? '/Personal_Website_3.0/static/'
    : '/static/';
document.head.appendChild(base);

document.addEventListener('DOMContentLoaded', () => {
    createHeader();
    renderFeaturedPortfolioList();
    renderPortfolioList();
    renderProductList();
    renderJoinUsSection();
    createContactIcons();
    renderSkillList();
    renderJobList();
    createFooter();
});
