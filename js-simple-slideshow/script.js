let i = 0;
let images = [];
let time = 3000;

images[0] = "images/mind.png";
images[1] = "images/power.png";
images[2] = "images/reality.png";
images[3] = "images/soul.png";
images[4] = "images/space.png";
images[5] = "images/time.png";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;