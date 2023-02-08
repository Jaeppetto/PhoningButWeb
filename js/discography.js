const shuffle = document.getElementById("shuffle");
const findJeans = document.getElementById("findJeans");

shuffle.addEventListener("click", () => {
  const stuffs = document.querySelectorAll(".stuff");

  for (const number in stuffs) {
    shuffling(stuffs[number]);
  }
});

function shuffling(things) {
  let coordX = Math.floor(Math.random() * 100);
  let coordY = Math.floor(Math.random() * 100);

  console.log(coordX, coordY);
  things.style.top = `${coordY}%`;
  things.style.left = `${coordX}%`;
}
