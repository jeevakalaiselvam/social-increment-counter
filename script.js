const facebookCounter = document.getElementById("facebook-counter");
const twitterCounter = document.getElementById("twitter-counter");
const youtubeCounter = document.getElementById("youtube-counter");

const fbNo = 7000;
const twNo = 3455;
const ytNo = 23000;

let currentFBCount = 0;
let currentTWCount = 0;
let currentYTCount = 0;

const intervalTimer = setInterval(() => {
    updateCounts();
}, 1);

function updateCounts() {
    if (
        currentFBCount >= fbNo &&
        currentTWCount >= twNo &&
        currentYTCount >= ytNo
    ) {
        clearInterval(intervalTimer);
        facebookCounter.innerText = fbNo;
        twitterCounter.innerText = twNo;
        youtubeCounter.innerText = ytNo;
    }

    if (currentFBCount < fbNo) {
        currentFBCount += Math.floor(fbNo / 200);
        facebookCounter.innerText = currentFBCount;
    }
    if (currentTWCount < twNo) {
        currentTWCount += Math.floor(twNo / 200);
        twitterCounter.innerText = currentTWCount;
    }
    if (currentYTCount < ytNo) {
        currentYTCount += Math.floor(ytNo / 200);
        youtubeCounter.innerText = currentYTCount;
    }
}
