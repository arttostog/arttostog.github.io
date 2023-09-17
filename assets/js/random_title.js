var Titles = ["Arttostog's personal website", "Hi there 👋", "Today is wednesday?", "Honk!", "🐝", "☔", "F!", "Yeap", "Ping!", "Pong!", "📢"];

function RandomTitle() {
    return Titles[Math.floor(Math.random() * Titles.length)];
}

document.title = RandomTitle();