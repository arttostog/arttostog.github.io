var Titles = ["Arttostog's personal website", "Hi there 👋", "Today is wednesday?", "Honk!", "🐝", "☔", "F!", "Yea", "Ping!", "Pong!", "📢"];

function getRandomTitle() {
    return Titles[Math.floor(Math.random() * Titles.length)];
}

document.title = getRandomTitle();