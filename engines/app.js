const hashChange = async() => {
    const presentRoute = getRoute();
    //home
    if (homeRoutes()) {
        //loading
        loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        await homePage();
        freeApp();
    }
    //login
    if (loginRoutes()) {
        //loading
        // loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        await loginPage();
        freeApp();
    }
    //tma
    if (tmaRoutes() && presentRoute.split("/").length < 4) {
        //loading
        // loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        await tmaPage();
        freeApp();
    }
    //tma/course
    if (tmaRoutes() && presentRoute.split("/").length === 4) {
        //loading
        loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        await tmaQuestionsPage();
        lockUp();
    }
    //pq
    if (pqRoutes()) {}
    //pq/course
    if (pqRoutes() && presentRoute.split("/").length === 3) {}
}

$(document).ready(async() => {
    if (getRoute()) {
        hashChange();
    } else {
        //loading
        loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        // home
        await homePage();
    }

    window.onhashchange = hashChange;
});