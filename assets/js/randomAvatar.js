var avatars = ["./assets/images/avatar.jpg", "./assets/images/avatar2.png"]

function getRandomAvatar() {
    if (Math.floor(Math.random() * 100) == 100) {
        return avatars[1];
    }
    return avatars[0];
}

var avatar = getRandomAvatar();
document.getElementById("favicon").setAttribute("href", avatar);
document.getElementById("icon").setAttribute("src", avatar);