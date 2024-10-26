// js/components/portfolio.js
export function createPortfolioItem(item) {
    return `
        <li class="portfolio-vertical portfolio-img" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.50) 100%),
            url('${item.imgSrc}') lightgray 50% / cover no-repeat;">
            <h5 class="text-white">${item.title}</h5>
            <h3 class="text-white" style="text-align:center">${item.subtitle}</h3>
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
            title: '蕾貝卡',
            subtitle: 'CyberPunk電馭叛客2077',
            imgSrc: '/static/images/00164-2396053275-0000.png',
        },
        {
            title: 'Pixel 9',
            subtitle: '滿手創新．無限可能',
            imgSrc: '/static/images/00000-4201842700-0000.png',
        },
        {
            title: '星野愛',
            subtitle: '我推的孩子',
            imgSrc: '/static/images/00201-2639187276-0000.png',
        }
    ];

    const portfolioList = document.getElementById('portfolio-list');
    if (portfolioList) {
        portfolioItems.forEach(item => {
            portfolioList.innerHTML += createPortfolioItem(item);
        });
    }

}
