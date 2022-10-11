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
  mouseOver_one();
};
document.getElementById("recent_play_list_one").onmouseout = function () {
  mouseOut_one();
};

function mouseOver_one() {
  document.getElementById("play_button_one").style.visibility = "visible";
}

function mouseOut_one() {
  document.getElementById("play_button_one").style.visibility = "hidden";
}





document.getElementById("recent_play_list_two").onmouseover = function () {
  mouseOver_two();
};
document.getElementById("recent_play_list_two").onmouseout = function () {
  mouseOut_two();
};

function mouseOver_two() {
  document.getElementById("play_button_two").style.visibility = "visible";
}

function mouseOut_two() {
  document.getElementById("play_button_two").style.visibility = "hidden";
}





document.getElementById("recent_play_list3").onmouseover = function () {
  mouseOver_three();
};
document.getElementById("recent_play_list3").onmouseout = function () {
  mouseOut_three();
};

function mouseOver_three() {
  document.getElementById("play_button3").style.visibility = "visible";
}

function mouseOut_three() {
  document.getElementById("play_button3").style.visibility = "hidden";
}





document.getElementById("recent_play_list4").onmouseover = function () {
  mouseOver_four();
};
document.getElementById("recent_play_list4").onmouseout = function () {
  mouseOut_four();
};

function mouseOver_four() {
  document.getElementById("play_button4").style.visibility = "visible";
}

function mouseOut_four() {
  document.getElementById("play_button4").style.visibility = "hidden";
}





document.getElementById("recent_play_list5").onmouseover = function () {
  mouseOver_five();
};
document.getElementById("recent_play_list5").onmouseout = function () {
  mouseOut_five();
};

function mouseOver_five() {
  document.getElementById("play_button5").style.visibility = "visible";
}

function mouseOut_five() {
  document.getElementById("play_button5").style.visibility = "hidden";
}





document.getElementById("recent_play_list6").onmouseover = function () {
  mouseOver_six();
};
document.getElementById("recent_play_list6").onmouseout = function () {
  mouseOut_six();
};

function mouseOver_six() {
  document.getElementById("play_button6").style.visibility = "visible";
}

function mouseOut_six() {
  document.getElementById("play_button6").style.visibility = "hidden";
}



document.getElementById("hover_library_img").onmouseover = function () {
  mouseOver_img();
};
document.getElementById("hover_library_img").onmouseout = function () {
  mouseOut_img();
};

function mouseOver_img() {
  document.getElementById("hover_library_img").style.filter = "invert(1)";
}

function mouseOut_img() {
  document.getElementById("hover_library_img").style.filter = "contrast(0)";
}



document.getElementById("notification_bell_icon").onmouseover = function () {
  mouseOver_notification_bell_icon();
};
document.getElementById("notification_bell_icon").onmouseout = function () {
  mouseOut_notification_bell_icon();
};

function mouseOver_notification_bell_icon() {
  document.getElementById("notification_bell_icon").style.filter = "invert(1)";
}

function mouseOut_notification_bell_icon() {
  document.getElementById("notification_bell_icon").style.filter = "contrast(0)";
}



document.getElementById("recent_play_icon").onmouseover = function () {
  mouseOver_recent_play_icon();
};
document.getElementById("recent_play_icon").onmouseout = function () {
  mouseOut_recent_play_icon();
};

function mouseOver_recent_play_icon() {
  document.getElementById("recent_play_icon").style.filter = "invert(1)";
}

function mouseOut_recent_play_icon() {
  document.getElementById("recent_play_icon").style.filter = "contrast(0)";
}



document.getElementById("setting_icon").onmouseover = function () {
  mouseOver_setting_icon();
};
document.getElementById("setting_icon").onmouseout = function () {
  mouseOut_setting_icon();
};

function mouseOver_setting_icon() {
  document.getElementById("setting_icon").style.filter = "invert(1)";
}

function mouseOut_setting_icon() {
  document.getElementById("setting_icon").style.filter = "contrast(0)";
}








