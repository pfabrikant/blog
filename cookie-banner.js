document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.indexOf("cookie_consent=true") === -1) {
        createCookieBanner();
    }
});

function createCookieBanner() {
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.innerHTML = `
        <p>I only use one cookie to remember that you've dismissed this banner. That's it!</p>
        <button id="accept-cookies">Got it!</button>
    `;
    document.body.appendChild(banner);

    document.getElementById("accept-cookies").addEventListener("click", function() {
        document.cookie = "cookie_consent=true; max-age=" + (365 * 24 * 60 * 60) + "; path=/";
        banner.style.display = "none";
    });
}
