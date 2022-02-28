const allText = document.querySelectorAll("h1>span");

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const splitedAlphabet = alphabets.split("");

console.log(allText);

let index = 0;

const finalText = ["WELCOME", "TO", "MY", "PORTFOLIO"];

const handleAnimate = () => {
  const textContent = allText[0].textContent.trim();

  console.log(textContent.split(""));
};

handleAnimate();
