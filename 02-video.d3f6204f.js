!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!")})),t.getVideoTitle().then((function(e){console.log("title:",e)})),t.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t.toString())})),document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("videoplayer-current-time");e&&t.setCurrentTime(parseFloat(e))}))}();
//# sourceMappingURL=02-video.d3f6204f.js.map