const randomNumber = (limit) => {
    return Math.floor(Math.random() * parseInt(limit));
}

const pickRandomColor = () => {
    const colorSet = ["primary", "success", "secondary", "warning", "info", "danger"];
    return colorSet[randomNumber(colorSet.length)];
}

const welcomeUser = () => {
    const message = [
        "How far",
        "How you dey",
        "How body",
        "Wetin dey sup",
        "How your side",
        "Wetin dey happen"
    ];
    return message[randomNumber(message.length)];
}

const a404 = () => {
    const message = [
        "E no deyyyyyy",
        "Wetin you wan make I do like this?",
        "Omooooooo!!!!! x10000",
        "No be like this e suppose be buuuuttttt",
        "You don enter wrong key",
        "No entrance, no get part 2",
        "Wahala be like what again?",
        "Maka why???",
        "Wahala don dey!",
        "E no choke!",
        "Tule joor",
    ];
    return message[randomNumber(message.length)];
}

const randomQuestionIcon = () => {
    const iconSet = [
        "fas fa-book",
        "fas fa-book-open",
        "fas fa-book-reader"
    ];
    return iconSet[randomNumber(iconSet.length)];
}