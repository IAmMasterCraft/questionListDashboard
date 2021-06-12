const loginPage = async() => {
    /**
     * empty parent(s) DOM
     */

    await emptyDomObject("#parent");

    await emptyDomObject("#course-body");

    /**
     * set random search
     * @todo
     */

    /**
     * welcome user
     */

    await setWelcome(".welcome-user");

    /**
     * monitor nav-links
     * @todo
     */

    /**
     * set section header
     */

    await $(".section-header-title").text(getRoute().replace(/_/g, " ").toUpperCase());

    /**
     * sett login
     */

    await loginToDom();

}