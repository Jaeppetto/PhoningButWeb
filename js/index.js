var phoningVideo = document.getElementById("phoningVideo");
var frame = 0;
var vidSize = 0;

function globalHeight(element) {
  var absoluteTop = window.pageYOffset + element.getBoundingClientRect().top;

  return absoluteTop;
}
window.addEventListener("scroll", () => {
  const phoneHeight = globalHeight(document.querySelector(".phoneImg")) - 300;
  const element = document.getElementsByClassName("phoneImg")[0];
  let offsetY = window.scrollY - phoneHeight;

  if (window.scrollY > phoneHeight && offsetY > 0) {
    var y = (90 / 1500) * window.scrollY - (90 / 1500) * phoneHeight;
    var y2 = (1 / 1500) * window.scrollY + (1 - phoneHeight / 1500);
    element.style.transform = `rotate(${y}deg) scale(${y2})`;
  } else {
    element.style.transform = `rotate(0deg)`;
  }
});

window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  //Video Length : 6.967
  frame = (6.967 / 3000) * scrollY;
  phoningVideo.currentTime = frame;

  vidSize = (1 / 4000) * scrollY + 0.5;
  phoningVideo.style.transform = `scale(${vidSize})`;
});

var debounceTimer = null;
let lastScrollPosition = window.pageYOffset;
var scrollDir;
const glitch = document.getElementById("glitch");
glitch.style.display = "none";

function showGlitch() {
  glitch.style.display = "block";
  glitch.style.zIndex = "15";
  document.getElementById("monitor").style.zIndex = "16";
  glitch.play();

  glitch.addEventListener("ended", () => {
    glitch.style.display = "none";
    window.scrollTo(0, 90000);
    document.getElementById("monitor").style.zIndex = "3";
  });
}

window.addEventListener("scroll", () => {
  var absoluteTop = globalHeight(document.querySelectorAll(".cc")[0]);

  const newScrollPosition = window.pageYOffset;
  if (newScrollPosition > lastScrollPosition) {
    scrollDir = "down";
  } else {
    scrollDir = "up";
  }
  lastScrollPosition = newScrollPosition;

  console.log(window.scrollY);

  if (
    window.scrollY > absoluteTop + 100 &&
    window.scrollY < absoluteTop + 300 &&
    scrollDir == "down"
  ) {
    if (debounceTimer === null) {
      debounceTimer = setTimeout(function () {
        debounceTimer = null;
      }, 10000);
      showGlitch();
    } else {
      // If debounceTimer is non-null, clear the existing timer and set a new one
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        debounceTimer = null;
        console.log("Scroll event occurred! 2");
      }, 10000);
    }
  }
});

const functions = document.querySelectorAll(".function");

functions.forEach((item) => {
  var tmp = item.innerHTML;

  item.addEventListener("mouseover", (e) => {
    e.preventDefault();
    item.innerHTML = "▶︎" + tmp;
  });

  item.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    item.innerHTML = tmp;
  });
});

functions[2].addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

const titleList1 = document.querySelectorAll("#typing1");
const titleList2 = document.querySelectorAll(".chat");
const titleList3 = document.querySelectorAll(".chat_b");

titleList1.forEach((el) => {
  setTimeout(() => {
    observer.observe(el);
  });
}, 500);
titleList2.forEach((el) => {
  setTimeout(() => {
    observer.observe(el);
  });
}, 500);
titleList3.forEach((el) => {
  setTimeout(() => {
    observer.observe(el);
  });
}, 500);
// titleList2.forEach((el) => observer.observe(el));
// titleList3.forEach((el) => observer.observe(el));

// https://gurtn.tistory.com/129
