createHeader()
function createHeader() {
    const header = document.querySelector('header')
    if (header) {
        header.innerHTML =
            `
            <nav>
                <ul class="gap-50">
                    <li class="btn-transparent-bg"><a href="/">
                            <h6 class="text-white">首頁</h6>
                        </a></li>
                    <li class="btn-transparent-bg"><a href="/static/html/portfolio.html">
                            <h6 class="text-white">我的作品</h6>
                        </a></li>
                    <li class="btn-transparent-bg"><a href="/static/html/product.html">
                            <h6 class="text-white">我的服務</h6>
                        </a></li>
                    <li class="btn-transparent-bg"><a href="/static/html/team.html">
                            <h6 class="text-white">團隊招募</h6>
                        </a></li>
                    <li class="btn-transparent-bg"><a href="/static/html/aboutme.html">
                            <h6 class="text-white">關於我</h6>
                        </a></li>
                    <li class="btn-transparent-bg"><a href="/static/html/contentus.html">
                            <h6 class="text-white">聯絡方式</h6>
                        </a></li>
                </ul>
            </nav>
        `
    }
}

createFooter()
function createFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML =
        `
            <nav>
                <ul style="display: flex;">
                    <li><a href="#"><i class="fa-brands fa-youtube fa-lg"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-github fa-lg"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin fa-lg"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-envelope fa-lg"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-google fa-lg"></i></a></li>
                </ul>
            </nav>
            <a href="#">
                <h5>Copyright©</h5>
            </a>
            <nav>
                <ul style="display: flex;">
                    <li><a href="#">
                            <h5>隱私權政策</h5>
                        </a></li>
                    <li><a href="#">
                            <h5>銷售條款</h5>
                        </a></li>
                    <li><a href="#">
                            <h5>服務條款</h5>
                        </a></li>
                </ul>
            </nav>
        `
    }
}

createPortfolio();
function createPortfolio() {
    const portfolioSection = document.querySelector('.portfolio'); // 尋找 class 為 portfolio 的元素
    if (portfolioSection) {
        portfolioSection.innerHTML = `
            <!-- Portfolio 的 HTML 內容 -->
        `;
    }
}

createFeaturedPortfolio();
function createFeaturedPortfolio() {
    const featuredPortfolioSection = document.querySelector('.featured-portfolio'); // 尋找 class 為 featured-portfolio 的元素
    if (featuredPortfolioSection) {
        featuredPortfolioSection.innerHTML = `
            <!-- Featured Portfolio 的 HTML 內容 -->
        `;
    }
}

createProduct();
function createProduct() {
    const productSection = document.querySelector('.product'); // 尋找 class 為 product 的元素
    if (productSection) {
        productSection.innerHTML = `
            <!-- Product 的 HTML 內容 -->
        `;
    }
}

createSkill();
function createSkill() {
    const skillSection = document.querySelector('.skill'); // 尋找 class 為 skill 的元素
    if (skillSection) {
        skillSection.innerHTML = `
            <!-- Skill 的 HTML 內容 -->
        `;
    }
}

createJob();
function createJob() {
    const jobSection = document.querySelector('.job'); // 尋找 class 為 job 的元素
    if (jobSection) {
        jobSection.innerHTML = `
            <!-- Job 的 HTML 內容 -->
        `;
    }
}

createContentUs();
function createContentUs() {
    const contentUsSection = document.querySelector('.content-us'); // 尋找 class 為 content-us 的元素
    if (contentUsSection) {
        contentUsSection.innerHTML = `
            <!-- Contact Us 的 HTML 內容 -->
        `;
    }
}

createJoinUs();
function createJoinUs() {
    const joinUsSection = document.querySelector('.join-us'); // 尋找 class 為 join-us 的元素
    if (joinUsSection) {
        joinUsSection.innerHTML = `
            <!-- Join Us 的 HTML 內容 -->
        `;
    }
}

createTitle();
function createTitle() {
    const titleSection = document.querySelector('.title'); // 尋找 class 為 title 的元素
    if (titleSection) {
        titleSection.innerHTML = `
            <!-- Title 的 HTML 內容 -->
        `;
    }
}
