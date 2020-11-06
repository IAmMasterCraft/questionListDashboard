const hashChange = async () => {
    const presentRoute = getRoute();
    //home
    if (homeRoutes()) {
        //loading
        loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        await homePage();
    }
    //tma
    if (tmaRoutes()) {
        //loading
        // loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        await tmaPage();
    }
    //tma/course
    if (tmaRoutes() && presentRoute.split("/").length === 3) {
        //loading
        loadingNotification("Please Wait", `Collecting information needed for ${(getRoute()) ? getRoute().replace(/_/g, " ").toUpperCase() : "the homepage"}`);
        await tmaQuestionsPage();
    }
    //pq
    if (pqRoutes()) {}
    //pq/course
    if (pqRoutes() && presentRoute.split("/").length === 3) {}
}

$(document).ready(async ()=>{
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