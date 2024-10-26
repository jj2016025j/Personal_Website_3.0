// js/components/jobs.js

export function createJobCard(job) {
    return `
        <li class="job-card">
            <img src="${job.imgSrc}" alt="${job.title}" class="job-card-img">
            <div class="job-card-content">
                <h4>${job.title}</h4>
                <h6 style="text-align: start;">${job.description}</h6>
            </div>
        </li>
    `;
}

export function renderJobList() {
    const jobs = [
        {
            title: '資深Unity開發工程師',
            description: '負責網頁應用開發，需精通React和Vue.js，與設計師及後端開發人員密切合作。',
            imgSrc: '../images/00000-4201842700-0000.png'
        },
        {
            title: '資深3D美術人員',
            description: '負責網頁應用開發，需精通React和Vue.js，與設計師及後端開發人員密切合作。',
            imgSrc: '../images/00203-3033230104.png'
        },
        {
            title: 'UIUX設計師',
            description: '負責網頁應用開發，需精通React和Vue.js，與設計師及後端開發人員密切合作。',
            imgSrc: '../images/00201-2639187276-0000.png'
        },
        {
            title: '資深全端開發工程師',
            description: '負責網頁應用開發，需精通React和Vue.js，與設計師及後端開發人員密切合作。',
            imgSrc: '../images/00163-1172640860-0000.png'
        }
    ];

    const jobList = document.getElementById('job-list');
    if (jobList)
        jobs.forEach(job => {
            jobList.innerHTML += createJobCard(job);
        });
}
