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

    if (y2 > 1.5) {
      y2 = 1.5;
    }
    element.style.transform = `rotate(${y}deg) scale(${y2})`;
  } else {
    element.style.transform = `rotate(0deg)`;
  }
});

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
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

  // console.log(window.scrollY);

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

functions[0].addEventListener("click", () => {
  window.scrollTo(0, 0);
});
functions[1].addEventListener("click", () => {
  document.querySelector("#signUp").classList.remove("d-none");
  document.querySelector("#signUp").classList.add("d-block");

  document.querySelector("#press").classList.remove("d-block");
  document.querySelector("#press").classList.add("d-none");
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
    // console.log(entry.isIntersecting);
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

// https://gurtn.tistory.com/129

var userInfo = {
  user: [
    {
      nickname: "",
      email: "",
      pw: "",
    },
  ],
};

const signupNickname = document.getElementById("signupNickname");
const signupEmail = document.getElementById("signupEmail");
const signupPw = document.getElementById("signupPw");
const signupBtn = document.getElementById("btnSignup");

const checkNickname = document.querySelectorAll(".check")[0];
const checkEmail = document.querySelectorAll(".check")[1];
const checkPw = document.querySelectorAll(".check")[2];

let isNickname = false;
let isEmail = false;
let isPw = false;

function initUser(object) {
  var tmpObj = JSON.stringify(object);
  localStorage.setItem("user", tmpObj);
}

function loadUser() {
  var temp = JSON.parse(localStorage.getItem("user"));

  return temp;
}

function addUser(nickname, email, pw) {
  var userList = loadUser();
  var tmpObj = {
    nickname: "",
    email: "",
    pw: "",
  };

  tmpObj.nickname = nickname;
  tmpObj.email = email;
  tmpObj.pw = pw;

  userList.user.push(tmpObj);

  // 유저 객체 갱신 위해 기존 객체 제거
  localStorage.removeItem("user");

  var newTmpobj = JSON.stringify(userList);
  localStorage.setItem("user", newTmpobj);
}
signupNickname.addEventListener("input", () => {
  var userList = loadUser();
  var blank_pattern = /[\s]/g;

  var result = userList.user.some(
    (num) => num.nickname == signupNickname.value
  );

  if (result && signupNickname.value.length != 0) {
    checkNickname.innerHTML = "이미 존재하는 닉네임입니다.";
    isNickname = false;
  } else if (
    signupNickname.value.length == 0 ||
    blank_pattern.test(signupNickname.value) == true
  ) {
    checkNickname.innerHTML =
      "공백을 제외한 1글자 이상의 닉네임을 설정해주세요";
    isNickname = false;
  } else {
    if (signupNickname.value.length != 0) {
      checkNickname.innerHTML = "사용 가능한 닉네임입니다.";
      isNickname = true;
    }
  }
});

signupEmail.addEventListener("input", () => {
  var userList = loadUser();

  var blank_pattern = /[\s]/g;
  var emeail_pattern =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var result = userList.user.some((num) => num.email == signupEmail.value);

  if (emeail_pattern.test(signupEmail.value) == false) {
    checkEmail.innerHTML = "올바른 이메일을 입력해주세요.";
    isEmail = false;
  } else {
    if (result) {
      checkEmail.innerHTML = "이미 존재하는 이메일입니다.";
      isEmail = false;
    } else {
      checkEmail.innerHTML = "사용 가능한 이메일입니다.";
      isEmail = true;
    }
  }
});

signupPw.addEventListener("input", () => {
  var userList = loadUser();

  var blank_pattern = /[\s]/g;
  var password_pattern = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;

  if (password_pattern.test(signupPw.value) == false) {
    checkPw.innerHTML = "올바른 패스워드를 입력해주세요.";
    isPw = false;
  } else {
    checkPw.innerHTML = "사용 가능한 패스워드입니다.";
    isPw = true;
  }
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (isNickname == true && isEmail == true && isPw == true) {
    alert(`${signupNickname.value}님, 가입을 환영합니다.`);
    addUser(signupNickname.value, signupEmail.value, signupPw.value);

    signupNickname.value = "";
    signupEmail.value = "";
    signupPw.value = "";

    document.querySelector("#signUp").classList.remove("d-block");
    document.querySelector("#signUp").classList.add("d-none");

    document.querySelector("#press").classList.remove("d-none");
    document.querySelector("#press").classList.add("d-block");
  } else {
    alert("조건에 맞춰 양식을 재작성해주세요");
  }
});

const back = document.querySelector(".back");
back.addEventListener("click", () => {
  document.querySelector("#signUp").classList.remove("d-block");
  document.querySelector("#signUp").classList.add("d-none");

  document.querySelector("#press").classList.remove("d-none");
  document.querySelector("#press").classList.add("d-block");

  initSignup();
});

function initSignup() {
  signupNickname.value = "";
  signupEmail.value = "";
  signupPw.value = "";

  checkEmail.innerHTML = "";
  checkPw.innerHTML = "";
  checkNickname.innerHTML = "";
}

var backinnerHTML = back.innerHTML;
back.addEventListener("mouseover", (e) => {
  e.preventDefault();
  back.innerHTML = "▶︎" + backinnerHTML;
});

back.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  back.innerHTML = backinnerHTML;
});
