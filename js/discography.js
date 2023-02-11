const shuffle = document.getElementById("shuffle");
const findJeans = document.getElementById("findJeans");
const stuffs = document.querySelectorAll(".stuff");
let randomValue = Math.floor(Math.random() * 11);

shuffle.addEventListener("click", () => {
  for (const number in stuffs) {
    shuffling(stuffs[number]);
  }
});

function shuffling(things) {
  let coordX = Math.floor(Math.random() * 100);
  let coordY = Math.floor(Math.random() * 100);
  randomValue = Math.floor(Math.random() * 11);

  // console.log(coordX, coordY);
  things.style.top = `${coordY}%`;
  things.style.left = `${coordX}%`;
}

stuffs.forEach((item) => {
  item.addEventListener("drag", (e) => {
    // 임의의 Item을 드래그하면 해당 요소의 좌표를 (e.scrollX,e.scrollY)로 계속 옮겨지게
    item.style.transition = "none";
    item.style.top = `${e.clientY}px`;
    item.style.left = `${e.clientX}px`;
  });

  item.addEventListener("dragend", () => {
    item.style.transition = "all 1s";
  });
});

// 0-11 stuffs 중 랜덤으로 2개에 앨범 디테일 페이지 이동 기능을 심어줌
// 기회 3번 주고, 실패 시 다시 셔플 + 다시 랜덤 지정
const playlist = document.querySelector(".playList");

stuffs.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target === stuffs[randomValue]) {
      playlist.classList.remove("d-none");
      randomValue = Math.floor(Math.random() * 11);
    } else {
      console.log("DDang");
    }
  });
});

playlist.addEventListener("click", (e) => {
  const divRow = document.querySelector(".playList .row");

  if (e.target == divRow) {
    playlist.classList.add("d-none");
    console.log("jo");
  }
});

const flip_a = document.querySelector("#a");
const flip_b = document.querySelector("#b");
const icon = document.querySelectorAll(".icon");
const icons = Array.from(icon);

flip_a.addEventListener("click", flip);
flip_b.addEventListener("click", flip);

function flip(e) {
  var isIcon = [];
  icons.forEach((item) => {
    return isIcon.push(e.target == item);
  });

  if (e.currentTarget.style.transform == "rotateY(180deg)") {
    if (isIcon.includes(true) != true)
      e.currentTarget.style.transform = "rotateY(0deg)";
  } else {
    e.currentTarget.style.transform = "rotateY(180deg)";
  }
}
