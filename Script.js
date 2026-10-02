function openCloseMenu() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function openHome() {
    var homePage = document.getElementById("homepage");
    var musicPage = document.getElementById("music_page");
    var podcastsPage = document.getElementById("podcasts_page");
    var gamesPage = document.getElementById("games_page");
    var contactPage = document.getElementById("contact_page");

    homePage.style.display = "flex";
    musicPage.style.display = "none";
    podcastsPage.style.display = "none";
    gamesPage.style.display = "none";
    contactPage.style.display = "none";

    hideMenuOnMobile();
}

function openMusic() {
    var homePage = document.getElementById("homepage");
    var musicPage = document.getElementById("music_page");
    var podcastsPage = document.getElementById("podcasts_page");
    var gamesPage = document.getElementById("games_page");
    var contactPage = document.getElementById("contact_page");

    homePage.style.display = "none";
    musicPage.style.display = "flex";
    podcastsPage.style.display = "none";
    gamesPage.style.display = "none";
    contactPage.style.display = "none";

    hideMenuOnMobile();
}

function openPodcasts() {
    var homePage = document.getElementById("homepage");
    var musicPage = document.getElementById("music_page");
    var podcastsPage = document.getElementById("podcasts_page");
    var gamesPage = document.getElementById("games_page");
    var contactPage = document.getElementById("contact_page");

    homePage.style.display = "none";
    musicPage.style.display = "none";
    podcastsPage.style.display = "flex";
    gamesPage.style.display = "none";
    contactPage.style.display = "none";

    hideMenuOnMobile();
}

function openGames() {
    var homePage = document.getElementById("homepage");
    var musicPage = document.getElementById("music_page");
    var podcastsPage = document.getElementById("podcasts_page");
    var gamesPage = document.getElementById("games_page");
    var contactPage = document.getElementById("contact_page");

    homePage.style.display = "none";
    musicPage.style.display = "none";
    podcastsPage.style.display = "none";
    gamesPage.style.display = "flex";
    contactPage.style.display = "none";

    hideMenuOnMobile();
}

function openContact() {
    var homePage = document.getElementById("homepage");
    var musicPage = document.getElementById("music_page");
    var podcastsPage = document.getElementById("podcasts_page");
    var gamesPage = document.getElementById("games_page");
    var contactPage = document.getElementById("contact_page");

    homePage.style.display = "none";
    musicPage.style.display = "none";
    podcastsPage.style.display = "none";
    gamesPage.style.display = "none";
    contactPage.style.display = "flex";

    hideMenuOnMobile();
}

function hideMenuOnMobile() {
    if (window.innerWidth < 600) {
        document.getElementById("menu").style.display = "none";
    }
}
