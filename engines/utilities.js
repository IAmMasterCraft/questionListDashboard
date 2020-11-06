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

const randomQuestionIcon = () => {
    const iconSet = [
        "fas fa-book",
        "fas fa-book-open",
        "fas fa-book-reader"
    ];
    return iconSet[randomNumber(iconSet.length)];
}