//Referenced to DOM elements to update later
const facebookCounter = document.getElementById("facebook-counter");
const twitterCounter = document.getElementById("twitter-counter");
const youtubeCounter = document.getElementById("youtube-counter");

//Actual social media follow counts
const fbNo = 7000;
const twNo = 3455;
const ytNo = 23000;

//Variable declaration for running counter
let currentFBCount = 0;
let currentTWCount = 0;
let currentYTCount = 0;

//Setup interval for every millisecond
const intervalTimer = setInterval(() => {
    updateCounts();
}, 1);

/**
 *This function counts and increments the follow count until the declared threshold is met.
 */
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

    //The increment for each follow count is calculated to be in range of maximum 200 steps to make sure the increment starts and stops at the same time.
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
