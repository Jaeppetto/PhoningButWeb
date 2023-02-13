var chatting = {
  members: [
    {
      name: "minji",
      chatting: ["강해린 이상하다"],
    },
    {
      name: "daniel",
      chatting: ["달콤한 맛만", "디저트 만만"],
    },
    {
      name: "hani",
      chatting: ["원하게 될 걸 알잖아", "😚"],
    },
    {
      name: "hyein",
      chatting: ["난 재미없어 게임 같은 건"],
    },
    {
      name: "haerin",
      chatting: ["?"],
    },
    {
      name: "bunnies",
      chatting: [],
    },
  ],
};

const chatRoom = document.getElementById("chatRoom");
const idCards = document.querySelectorAll("#idcard");
var chatID = "none";

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

  console.log(chatID);

  switch (chatID) {
    case idCards[0]:
      console.log("MINJI");
      //민지
      break;
    case idCards[1]:
      //다니엘
      break;
    case idCards[2]:
      //하니
      break;
    case idCards[3]:
      //혜인
      break;
    case idCards[4]:
      //해린
      break;
  }
});

chatRoom.addEventListener("dragleave", (e) => {
  chatRoom.style.border = "none";
});
//Drag eventlistner
// 그럼 기존에 있던 화면을 날리고, ID Card 주인의 채팅창을 표시함 & 변수로 표시 (isMinji..)
//만약 통신이 되면, 내가 보내는 메시지는 우측 정렬 상대가 보애는 메시지는 좌측정렬하면 됨
//메시지를 입력하고 전송버튼을 눌렀을 떄, siwtch 변수로 해당 오브젝트에 메시지 넣고 js로 데이터바인딩하면 됨.

//session storage로 현재 로그인 여부 확인하면 될 듯

// 얘 드래그 시작하면 변수 변함
// 박스 위로 놓았을 때, 변수 따라서 그 변수에 맞는 오브젝트 리스트 불러와
//그래서 채팅창 이름이나 채팅 목록 바꿔주면 될 듯 .
