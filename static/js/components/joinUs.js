// js/components/joinUs.js

export function createJoinUsSection() {
    return `
        <h3>加入我們</h3>
        <h4 style="width:500px;text-align: center;">我們正在籌備開發一款等待頭顯設備普及後，能夠取代2D電商平台的3D電商平台，
            如果你們也有跟我一樣的夢想，歡迎加入我們~!</h4>
        <a href="/static/html/contentus.html">
            <div class="btn btn-rounded btn-bg-black">
                <h6 class="text-white">聯絡我們</h6>
            </div>
        </a>
    `;
}

export function renderJoinUsSection() {
    const joinUsSection = document.getElementById('join-us-section');
    if (joinUsSection) {
        joinUsSection.innerHTML = createJoinUsSection();
    }
}
