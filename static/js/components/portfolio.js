// js/components/portfolio.js
export function createPortfolioItem(item) {
    return `
        <li class="portfolio-vertical portfolio-img">
            <h6 class="text-white">${item.title}</h6>
            <h3 class="text-white">${item.subtitle}</h3>
            <a href="/static/html/checkportfolio.html">
                <div class="btn btn-rounded btn-outline-white">
                    <h6 class="text-white">了解詳情</h6>
                </div>
            </a>
        </li>
    `;
}

export function renderPortfolioList() {
    const portfolioItems = [
        {
            title: 'Pixel 9',
            subtitle: '滿手創新．無限可能'
        },
        {
            title: 'Pixel 9',
            subtitle: '滿手創新．無限可能'
        },
        {
            title: 'Pixel 9',
            subtitle: '滿手創新．無限可能'
        }
    ];

    const portfolioList = document.getElementById('portfolio-list');
    if (portfolioList) {
        portfolioItems.forEach(item => {
            portfolioList.innerHTML += createPortfolioItem(item);
        });
    }

}
