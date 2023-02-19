var chatting = {
  members: [
    {
      name: "민지🐻",
      text: ["강해린 이상하다"],
      chatting: [],
    },
    {
      name: "다니엘🐶",
      text: ["달콤한 맛만", "디저트 만만"],
      chatting: [],
    },
    {
      name: "하니🐰",
      text: ["원하게 될 걸 알잖아", "😚"],
      chatting: [],
    },
    {
      name: "혜인🐣",
      text: ["난 재미없어 게임 같은 건"],
      chatting: [],
    },
    {
      name: "해린🐈",
      text: ["?"],
      chatting: [],
    },
    {
      name: "Bunnies",
      chatting: [],
    },
  ],
};

// Init
const chatRoom = document.getElementById("chatRoom");
const idCards = document.querySelectorAll("#idcard");
const chatBG = document.getElementById("chatBg");
const chatCover = document.getElementById("chatCover");

const chatForm = document.querySelector(".form");
const formText = document.querySelector("#chatInput");
const chatDiv = document.getElementsByClassName("chat")[0];
const btnClean = document.getElementById("btnClean");

var chatID = "none";
var listNum = 0;
var profileImg = "";

// Functions
function initChat(object) {
  var newObj = JSON.stringify(object);
  localStorage.setItem("chat", newObj);
}

function loadChat() {
  // 1. 로컷스토리지에서 JSON 가져온 후 오브젝트로 파싱
  // 2. chatting 파라미터로 접근하여 리턴
  var temp = JSON.parse(localStorage.getItem("chat"));

  return temp;
}

function saveChat(listNum, input) {
  // 1. 로컬스토리지에서 JSON() 가져옴
  // 2. 오브젝트로 파싱 후 chatting 파라미터로 접근
  // 3. 압력받은 input 변수 chatting 파라미터에 append
  // 4. 기존 오브젝트 삭제 후 새로운 입력 갱신 된 오브젝트 JSON화
  // 5. 로컬스토리지에 저장
  var chatObj = loadChat();
  chatObj.members[listNum].chatting.push(input);
  console.log(input);

  localStorage.removeItem("chat");

  var newChatlist = JSON.stringify(chatObj);
  localStorage.setItem("chat", newChatlist);
}

function printChat(listNum) {
  // 1. 로컬스토리지에서 JSON() 가져옴
  // 2. 오브젝트로 파싱 후 해당 유저의 chatting 파라미터로 접근
  // 3. 가져와 forEach 메서드 통해 채팅 갯수만큼 화면에 출력
  // 4.
  chatDiv.innerHTML = "";
  var chatObj = loadChat();
  chatList = chatObj.members[listNum].chatting;

  chatList.forEach((item) => {
    item = String(item);
    var template = `<div
    id="myChatting"
    class="col-12 mt-2 d-flex justify-content-end"
    style="height: 1.7rem%"
  >
    <div class="myChat">${item}</div>
  </div>`;

    chatDiv.insertAdjacentHTML("beforeend", template);
  });
}

function clearChat(listNum) {
  var chatObj = loadChat();
  chatDiv.innerHTML = "";

  // chatObj.members.forEach((item) => {
  //   item.chatting = [];
  // });

  chatObj.members[listNum].chatting = [];
  localStorage.removeItem("chat");

  var newChatlist = JSON.stringify(chatObj);
  localStorage.setItem("chat", newChatlist);

  printChat(listNum);
}

// Events
idCards.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    // e.preventDefault();
    chatID = item;
  });
});

chatCover.addEventListener("dragover", (e) => {
  console.log(e);
  e.preventDefault();
  chatCover.style.border = "15px solid rgba(0, 145, 255, 0.478)";

  document.getElementById("chatText").style.transform = "scale(1.3)";
});

chatCover.addEventListener("drop", (e) => {
  chatCover.style.border = "none";
  chatCover.classList.add("d-none");

  switch (chatID) {
    case idCards[0]:
      listNum = 0;
      printChat(listNum);
      //민지
      // 채팅방 한 번 초기화하고
      // 오브젝트 내 채팅 객체 데이터바인딩
      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[0].name}'s Room`;
      profileImg = "./img/minji.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[0].name;
      chatting.members[0].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[0].text;
      break;

    case idCards[1]:
      listNum = 1;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[1].name}'s Room`;
      profileImg = "./img/daniel.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[1].name;
      chatting.members[1].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[1].text;

      //다니엘
      break;

    case idCards[2]:
      listNum = 2;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[2].name}'s Room`;
      profileImg = "./img/hani.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[2].name;
      chatting.members[2].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[2].text;

      //하니
      break;

    case idCards[3]:
      listNum = 3;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[3].name}'s Room`;
      profileImg = "./img/hyein.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[3].name;
      chatting.members[3].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[3].text;

      //혜인
      break;

    case idCards[4]:
      listNum = 4;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[4].name}'s Room`;
      profileImg = "./img/haerin.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[4].name;
      chatting.members[4].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[4].text;

      //해린
      break;
  }
});

chatCover.addEventListener("dragleave", (e) => {
  document.getElementById("chatText").style.transform = "scale(1)";
});

chatRoom.addEventListener("dragover", (e) => {
  e.preventDefault();
  chatRoom.style.border = "15px solid rgba(0, 145, 255, 0.478)";
});

chatRoom.addEventListener("drop", (e) => {
  chatRoom.style.border = "none";

  switch (chatID) {
    case idCards[0]:
      // Minji
      listNum = 0;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[0].name}'s Room`;
      profileImg = "./img/minji.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[0].name;
      chatting.members[0].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[0].text;
      break;

    case idCards[1]:
      // Daniel
      listNum = 1;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[1].name}'s Room`;
      profileImg = "./img/daniel.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[1].name;
      chatting.members[1].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[1].text;
      break;

    case idCards[2]:
      // Hani
      listNum = 2;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[2].name}'s Room`;
      profileImg = "./img/hani.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[2].name;
      chatting.members[2].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[2].text;
      break;

    case idCards[3]:
      // Hyein
      listNum = 3;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[3].name}'s Room`;
      profileImg = "./img/hyein.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[3].name;
      chatting.members[3].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[3].text;
      break;

    case idCards[4]:
      // Haerin
      listNum = 4;
      printChat(listNum);

      document.getElementById(
        "chatTitle"
      ).innerHTML = `${chatting.members[4].name}'s Room`;
      profileImg = "./img/haerin.jpeg";
      document.getElementById("profileImg").src = profileImg;

      document.getElementById("chatName").innerHTML = chatting.members[4].name;
      chatting.members[4].chatting = [];
      document.getElementsByClassName("yourChat")[0].innerHTML =
        chatting.members[4].text;
      break;
  }
});

chatRoom.addEventListener("dragleave", (e) => {
  chatRoom.style.border = "none";
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formText.value.length != 0) {
    saveChat(listNum, formText.value);
    printChat(listNum);
    formText.value = "";
  }
});

document.getElementById("chatSubmit").addEventListener("click", function (e) {
  e.preventDefault();
  if (formText.value.length != 0) {
    saveChat(listNum, formText.value);
    printChat(listNum);
    formText.value = "";
  }
});

btnClean.addEventListener("click", (e) => {
  e.preventDefault();
  clearChat(listNum);
});

var chat = JSON.parse(localStorage.getItem("chat"));
