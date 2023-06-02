var video = document.getElementById("presentation");

// Manually add timestamps (seconds) to pause to give the appearance of slides.
const pauseTimes = [];

function checkAutoPause() {
    var currentSecond = Math.floor(video.currentTime);
    if (pauseTimes.includes(currentSecond)) {
        video.pause();
        video.currentTime = currentSecond + 1;
    }
}

video.addEventListener("timeupdate", checkAutoPause);

video.addEventListener("mouseenter", function() {
    video.controls = true;
});
video.addEventListener("mouseleave", function() {
    video.controls = false;
});

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        event.preventDefault();
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});
