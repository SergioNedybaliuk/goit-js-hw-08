const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


player.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime.toString());
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTime = localStorage.getItem("videoplayer-current-time");

    if (savedTime) {
        player.setCurrentTime(parseFloat(savedTime));
    }
});