const grantAccess = async () => {
    // const registeredKeys = Object.keys(allCourses[getRoute().replace(/questions\//g, '').replace(/\/login/g, '')]);
    const key = document.getElementById("passcode").value;
    loadingNotification("Please Wait", `Authenticating ${key}...`);
    const userCourse = await getUser(btoa(key))
    if (userCourse && userCourse.length > 0) {
        window.location.replace(`./#${getRoute().replace(/\/login/g, '')}/${btoa(key)}`);
    } else {
        alert(a404());
    }
    forceCloseSwal();
}

const lockUp = () => {
    $("body").attr({
        "oncopy": "return false",
        "onpaste": "return false",
        "oncut": "return false",
        "onmousedown": "return false",
        "onselectstart": "return false"
    });
}

const freeApp = () => {
    $("body").attr({
        "oncopy": "-",
        "onpaste": "-",
        "oncut": "-",
        "onmousedown": "-",
        "onselectstart": "-"
    });
}