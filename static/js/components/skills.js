// js/components/skills.js

export function createSkillCard(skill) {
    return `
        <li class="skill-card">
            <img src="${skill.imgSrc}" alt="${skill.name}" class="skill-card-img">
            <div class="skill-card-content">${skill.name}</div>
        </li>
    `;
}

export function renderSkillList() {
    const skills = [
        {
            name: '網頁開發',
            imgSrc: '../images/00164-2396053275-0000.png',
        },
        {
            name: '伺服器架設',
            imgSrc: '../images/00203-3033230104.png',
        },
        {
            name: 'AI繪圖',
            imgSrc: '../images/00201-2639187276-0000.png',
        },
        {
            name: '平面設計',
            imgSrc: '../images/00000-4201842700-0000.png',
        },
        {
            name: '營運管理',
            imgSrc: '../images/00163-1172640860-0000.png',
        }
    ];

    const skillList = document.getElementById('skill-list');
    if (skillList)
        skills.forEach(skill => {
            skillList.innerHTML += createSkillCard(skill);
        });
}
