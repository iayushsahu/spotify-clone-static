let container = document.querySelector(".greeting_div");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 0 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 17
    ? "Good Afternoon"
    : timeNow > 18 && timeNow < 21
    ? "Good evening"
    : "Good Night";
container.innerHTML = `<h1>${greeting}</h1>`;

document.getElementById("recent_play_list_one").onmouseover = function () {
  document.getElementById("play_button_one").style.visibility = "visible";
};
document.getElementById("recent_play_list_one").onmouseout = function () {
  document.getElementById("play_button_one").style.visibility = "hidden";
};

document.getElementById("recent_play_list_two").onmouseover = function () {
  document.getElementById("play_button_two").style.visibility = "visible";
};
document.getElementById("recent_play_list_two").onmouseout = function () {
  document.getElementById("play_button_two").style.visibility = "hidden";
};

document.getElementById("recent_play_list3").onmouseover = function () {
  document.getElementById("play_button3").style.visibility = "visible";
};
document.getElementById("recent_play_list3").onmouseout = function () {
  document.getElementById("play_button3").style.visibility = "hidden";
};

document.getElementById("recent_play_list4").onmouseover = function () {
  document.getElementById("play_button4").style.visibility = "visible";
};
document.getElementById("recent_play_list4").onmouseout = function () {
  document.getElementById("play_button4").style.visibility = "hidden";
};

document.getElementById("recent_play_list5").onmouseover = function () {
  document.getElementById("play_button5").style.visibility = "visible";
};
document.getElementById("recent_play_list5").onmouseout = function () {
  document.getElementById("play_button5").style.visibility = "hidden";
};

document.getElementById("recent_play_list6").onmouseover = function () {
  document.getElementById("play_button6").style.visibility = "visible";
};
document.getElementById("recent_play_list6").onmouseout = function () {
  document.getElementById("play_button6").style.visibility = "hidden";
};

document.getElementById("hover_library_img").onmouseover = function () {
  document.getElementById("hover_library_img").style.filter = "invert(1)";
};
document.getElementById("hover_library_img").onmouseout = function () {
  document.getElementById("hover_library_img").style.filter = "contrast(0)";
};

document.getElementById("notification_bell_icon").onmouseover = function () {
  document.getElementById("notification_bell_icon").style.filter = "invert(1)";
};
document.getElementById("notification_bell_icon").onmouseout = function () {
  document.getElementById("notification_bell_icon").style.filter =
    "contrast(0)";
};

document.getElementById("recent_play_icon").onmouseover = function () {
  document.getElementById("recent_play_icon").style.filter = "invert(1)";
};
document.getElementById("recent_play_icon").onmouseout = function () {
  document.getElementById("recent_play_icon").style.filter = "contrast(0)";
};

document.getElementById("setting_icon").onmouseover = function () {
  document.getElementById("setting_icon").style.filter = "invert(1)";
};
document.getElementById("setting_icon").onmouseout = function () {
  document.getElementById("setting_icon").style.filter = "contrast(0)";
};

// top mix playlist mouse events

const element = document.querySelector(".top_mix_playlist_play_button");
element.classList.add(
  "animate__animated",
  "animate__fadeInUp",
  "animate__faster"
);

document.querySelector(".top_mix_playlist1").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper1"
  ).style.display = "block";
};

document.querySelector(".top_mix_playlist1").onmouseout = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper1"
  ).style.display = "none";
};
document.querySelector(".top_mix_playlist2").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper2"
  ).style.display = "block";
};

document.querySelector(".top_mix_playlist2").onmouseout = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper2"
  ).style.display = "none";
};
document.querySelector(".top_mix_playlist2").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper2"
  ).style.display = "block";
};

document.querySelector(".top_mix_playlist3").onmouseout = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper3"
  ).style.display = "none";
};
document.querySelector(".top_mix_playlist3").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper3"
  ).style.display = "block";
};

document.querySelector(".top_mix_playlist4").onmouseout = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper4"
  ).style.display = "none";
};
document.querySelector(".top_mix_playlist4").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper4"
  ).style.display = "block";
};

document.querySelector(".top_mix_playlist5").onmouseout = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper5"
  ).style.display = "none";
};
document.querySelector(".top_mix_playlist5").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper5"
  ).style.display = "block";
};

document.querySelector(".top_mix_playlist6").onmouseout = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper6"
  ).style.display = "none";
};
document.querySelector(".top_mix_playlist6").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper6"
  ).style.display = "block";
};

document.querySelector(".top_mix_playlist7").onmouseout = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper7"
  ).style.display = "none";
};
document.querySelector(".top_mix_playlist7").onmouseover = function () {
  document.querySelector(
    ".top_mix_playlist_play_button_wrapper7"
  ).style.display = "block";
};

// artist playlist mouse Event

document.querySelector(".artist_div1").onmouseover = function () {
  document.querySelector(".artist_div_btn_wrapper1").style.display = "block";
};
document.querySelector(".artist_div1").onmouseout = function () {
  document.querySelector(".artist_div_btn_wrapper1").style.display = "none";
};

document.querySelector(".artist_div2").onmouseover = function () {
  document.querySelector(".artist_div_btn_wrapper2").style.display = "block";
};
document.querySelector(".artist_div2").onmouseout = function () {
  document.querySelector(".artist_div_btn_wrapper2").style.display = "none";
};

document.querySelector(".artist_div3").onmouseover = function () {
  document.querySelector(".artist_div_btn_wrapper3").style.display = "block";
};
document.querySelector(".artist_div3").onmouseout = function () {
  document.querySelector(".artist_div_btn_wrapper3").style.display = "none";
};

document.querySelector(".artist_div4").onmouseover = function () {
  document.querySelector(".artist_div_btn_wrapper4").style.display = "block";
};
document.querySelector(".artist_div4").onmouseout = function () {
  document.querySelector(".artist_div_btn_wrapper4").style.display = "none";
};

document.querySelector(".artist_div5").onmouseover = function () {
  document.querySelector(".artist_div_btn_wrapper5").style.display = "block";
};
document.querySelector(".artist_div5").onmouseout = function () {
  document.querySelector(".artist_div_btn_wrapper5").style.display = "none";
};

document.querySelector(".artist_div6").onmouseover = function () {
  document.querySelector(".artist_div_btn_wrapper6").style.display = "block";
};
document.querySelector(".artist_div6").onmouseout = function () {
  document.querySelector(".artist_div_btn_wrapper6").style.display = "none";
};

document.querySelector(".artist_div7").onmouseover = function () {
  document.querySelector(".artist_div_btn_wrapper7").style.display = "block";
};
document.querySelector(".artist_div7").onmouseout = function () {
  document.querySelector(".artist_div_btn_wrapper7").style.display = "none";
};

// player javascript for music play and pause

document.getElementById("song_like").onclick = () => {
  document.getElementById(
    "song_like"
  ).innerHTML = `<ion-icon name="heart"></ion-icon>`;
};

const playerButton = document.getElementById("play_pause"),
  audio = document.querySelector("audio"),
  playIcon = `<ion-icon name="play" style="color: var(--icons-color);"></ion-icon>`,
  pauseIcon = `<ion-icon style="color: var(--icons-color);" name="pause"></ion-icon>`;

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
}
playerButton.addEventListener("click", toggleAudio);

function audioEnded() {
  playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

const timeline = document.querySelector(".timeline");
function changeTimelinePosition() {
  const percentagePosition = (100 * audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}
audio.ontimeupdate = changeTimelinePosition;
