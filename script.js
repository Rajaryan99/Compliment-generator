const compliments = [
    "You're smarter than ChatGPT!",
    "Your brain is faster than JavaScript!",
    "You debug like a detective!",
    "You're more reliable than Stack Overflow!",
    "You write code so clean, it's poetry!",
    "Your CSS is prettier than Pinterest!",
    "You're the main() character!",
    "You commit like a pro!",
    "You're the semicolon that completes me ;)",
    "You’re the AI whisperer!",
];

const complimentTxt = document.getElementById("compliment");
const generateCom = document.getElementById("btn");

generateCom.addEventListener("click", () => {
    const randomIdx = Math.floor(Math.random() * compliments.length);
    complimentTxt.innerText = compliments[randomIdx];

});