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

const chatRoom = document.getElementById("chatRoom");
const idCards = document.querySelectorAll("#idcard");
var chatID = "none";
var profileImg = "";
const chatBG = document.getElementById("chatBg");
// document.querySelector("#profileImg").src = "profileImg";

idCards.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    // e.preventDefault();
    chatID = item;
  });
});

chatRoom.addEventListener("dragover", (e) => {
  e.preventDefault();
  chatRoom.style.border = "15px solid rgba(0, 145, 255, 0.478)";
});

chatRoom.addEventListener("drop", (e) => {
  // e.preventDefault();
  chatRoom.style.border = "none";

  switch (chatID) {
    case idCards[0]:
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

const chatForm = document.querySelector(".form");
const formText = document.querySelector("#chatInput");
const chatDiv = document.getElementsByClassName("chat")[0];

chatRoom.addEventListener("dragleave", (e) => {
  chatRoom.style.border = "none";
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formText.value.length != 0) {
    chatting.members[5].chatting.push(chatForm.value);
    // var appendText = doucment.createElement()
    var 템플릿 = `<div
    id="myChatting"
    class="col-12 mt-2 d-flex justify-content-end"
    style="height: 1.7rem%"
  >
    <div class="myChat">${formText.value}</div>
  </div>`;
    chatDiv.insertAdjacentHTML("beforeend", 템플릿);

    formText.value = "";
  }
});

document.getElementById("chatSubmit").addEventListener("click", function () {
  if (formText.value.length != 0) {
    chatting.members[5].chatting.push(chatForm.value);
    // var appendText = doucment.createElement()
    var 템플릿 = `<div
    id="myChatting"
    class="col-12 mt-2 d-flex justify-content-end"
    style="height: 1.7rem%"
  >
    <div class="myChat">${formText.value}</div>
  </div>`;
    chatDiv.insertAdjacentHTML("beforeend", 템플릿);

    formText.value = "";
  }
});
//Drag eventlistner
// 그럼 기존에 있던 화면을 날리고, ID Card 주인의 채팅창을 표시함 & 변수로 표시 (isMinji..)
//만약 통신이 되면, 내가 보내는 메시지는 우측 정렬 상대가 보애는 메시지는 좌측정렬하면 됨
//메시지를 입력하고 전송버튼을 눌렀을 떄, siwtch 변수로 해당 오브젝트에 메시지 넣고 js로 데이터바인딩하면 됨.

//session storage로 현재 로그인 여부 확인하면 될 듯

// 얘 드래그 시작하면 변수 변함
// 박스 위로 놓았을 때, 변수 따라서 그 변수에 맞는 오브젝트 리스트 불러와
//그래서 채팅창 이름이나 채팅 목록 바꿔주면 될 듯 .
