var phoningVideo = document.getElementById("phoningVideo");
var frame = 0;
var vidSize = 0;

window.addEventListener("scroll", () => {
  //Video Length : 6.967
  frame = (6.967 / 3000) * scrollY;
  phoningVideo.currentTime = frame;

  vidSize = (1 / 4000) * scrollY + 0.5;
  phoningVideo.style.transform = `scale(${vidSize})`;
});

// scrollY > 2700부터 서서히 투명해지게.
