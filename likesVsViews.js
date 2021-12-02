console.log("Starting")
// var body = document.getElementsByTagName("body")[0];
// body.addEventListener("yt-navigate-finish", function(event) {
//     console.log("Finished navigating to: " + event.detail.url);
// });

window.addEventListener("spfdone", function(e) {
    console.log("Finished loading page");
});

document.addEventListener("yt-navigate-finish", function (event) {
    console.log("Finished loading page")
    const containerElement = document.getElementById("container");
    const ratio = document.createElement("h1");
    ratio.innerHTML = "LikesVsViews";
    containerElement.appendChild(ratio);
    
});

