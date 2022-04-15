const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function()  {
// random color 
const randomNumber = getRandomColor();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];

// console.log(document.body);

});
function getRandomColor(){
    return Math.floor(Math.random()*colors.length);
}