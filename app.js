let button = document.querySelector("button");

button.addEventListener("click", () => {
  let color = getRandomColor();
  let div = document.querySelector("div");
  let h1 = document.querySelector("h1");
  div.style.backgroundColor = color;
  h1.innerText = color;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
