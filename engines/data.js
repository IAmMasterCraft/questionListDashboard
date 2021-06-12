let allCourses = [];
Object.objsize = function(Myobj) {
    let osize = 0,
        key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

const getTmaLinks = async() => {
    const tmaLinks = [];
    await $.get(
        "https://firestore.googleapis.com/v1beta1/projects/exam-76c31/databases/(default)/documents/links/tma",
        (result, status, xhr) => {
            const allResult = Object.objsize(result["fields"]);
            for (let index = 0; index < allResult; index++) {
                const element = result["fields"][index];
                if (element["stringValue"].includes("tma3")) {
                    tmaLinks.push(element["stringValue"]);
                }
            }
            tmaLinks.push("past_questions");
        }
    );

    return await tmaLinks;
};

const getListedCourses = async() => {
    loadingNotification("Please Wait", `Listing Courses...`);
    const myRoute = getRoute().split("/");
    const availableCourses = await getUser(myRoute[myRoute.length - 1]);
    forceCloseSwal();
    return availableCourses;
}

const getTmaQuestions = async() => {
    const tmaQuestions = [];
    const splittedRoute = getRoute().split("/");
    const url = `https://firestore.googleapis.com/v1beta1/projects/exam-76c31/databases/(default)/documents/${splittedRoute[1]}/${splittedRoute[3]}`;
    await $.get(url, (result) => {
        const allResult = Object.objsize(result["fields"]);
        for (let index = 0; index < allResult; index++) {
            const element = result["fields"][`question${index + 1}`];
            tmaQuestions.push(element["stringValue"]);
        }
    });
    return await tmaQuestions;
}

const getUser = async (userCode) => {
    try {
        const resp = await $.get(`https://x-json-server.herokuapp.com/${userCode}`);
        return resp;
    } catch (error) {
        // console.log(error)
        return false;
    }
}