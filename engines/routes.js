const getRoute = () => {
    return $(location).attr("href").split("#")[1];
}

/**
 * login routes
 */

const loginRoutes = () => {
    return ((getRoute()) && getRoute().includes("login")) ? true : false;
}

/**
 * tma routes
 */

const tmaRoutes = () => {
    return ((getRoute()) && getRoute().includes("tma") && !getRoute().includes("login")) ? true : false;
}

/**
 * pq routes
 */

const pqRoutes = () => {
    return ((getRoute()) && getRoute().includes("past_questions")) ? true : false;
}

/**
 * home routes
 */

const homeRoutes = () => {
    if ((getRoute()) && getRoute().includes("home")) return true;
    if (getRoute() === "") return true;
    if (!(getRoute())) return true;
    return false;
}