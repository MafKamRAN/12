const container = document.getElementById("_container");
let greenColorCodes = [
  "#7CFC00",
  "#78AB46",
  "#3B5323",
  "#458B00",
  "#BCED91",
  "#61B329",
  "#5DFC0A",
  "#4CBB17",
  "#4AC945",
  "#00EE00",
  "#33FF33",
  "#00C957",
];
const numberOfSquares = 99;
for (let i = 0; i < numberOfSquares; i++) {
  const activity = document.createElement("div");
  activity.classList.add("activity");
  activity.addEventListener("mouseover", () => {
    addColor(activity);
  });
  activity.addEventListener("mouseout", () => {
    stickColor(activity);
  });
  container.appendChild(activity);
}
function addColor(squareTiles) {
  const gettingColor = greenColors();
  squareTiles.style.backgroundColor = gettingColor;
  squareTiles.style.boxShadow = `0 0 2px ${gettingColor}, 0 0 10px ${greenColors}`;
}
function greenColors() {
  return greenColorCodes[Math.floor(Math.random() * greenColorCodes.length)];
}
function stickColor(squareTile) {
  const gettingColor = greenColors();
  squareTile.style.backgroundColor = gettingColor;
  squareTile.style.boxShadow = `0 0 2px ${gettingColor}, 0 0 10px ${greenColors}`;
}
