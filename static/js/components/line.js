// js/components/line.js

export function createLineIcon() {
    const lineProtocolUrls = [
        { href: "line://ti/p/20161116", iconClass: "fa-brands fa-line", title: "LINE 個人1" },
        { href: "line://ti/p/HhwJIOE8Z1", iconClass: "fa-brands fa-line", title: "LINE 個人2" },
        { href: "https://line.me/ti/p/HhwJIOE8Z1", iconClass: "fa-brands fa-line", title: "LINE 個人3" },
        { href: "https://line.me/R/ti/g/-jXkGN-sfK", iconClass: "fa-brands fa-line", title: "LINE 群組1" },
        { href: "line://R/ti/g/-jXkGN-sfK", iconClass: "fa-brands fa-line", title: "LINE 群組2" }
    ];

    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    const p_lineLink = isMobile ? "line://ti/p/HhwJIOE8Z1" : "https://line.me/ti/p/HhwJIOE8Z1";
    const g_lineLink = isMobile ? "https://line.me/R/ti/g/-jXkGN-sfK" : "line://R/ti/g/-jXkGN-sfK";
    return [
        { href: p_lineLink, iconClass: "fa-brands fa-line", title: "LINE 個人" },
        { href: g_lineLink, iconClass: "fa-brands fa-line", title: "LINE 群組" },
    ];
}