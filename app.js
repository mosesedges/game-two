document.addEventListener("DOMContentloaded", ()=> {
  const squares = document.querySelectorAll(".grid div")
  const scoreDisplay = document.querySelector(".span")
  const startBtn = document.querySelector(".start")
const width = 10;
let currentIdex= 0;
let appleIndex = 0;
let currentSnake = [2,1,0] // 2 for head, 0 for tail and 1 for body
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime =0;
let interval =0;


function startGame() {
  currentSnake.forEach(index => squares[index].classList.remove("snake"));
  suares[appleIndex].classList.remove("apple");
  clearInterval(interval);
  score =0;
  //randomApple();
  direction = 1;
  scoreDisplay.innerHTML = score;
  intervalTime = 1000;
  currentSnake = [2,1,0]
  currentIdex = 0;
  currentSnake.forEach(index => squares[index].classList.add("snake"));
  interval = setInterval(moveOutcomes, intervalTime);
}
function moveOutcomes(){
  if (
    (currentSnake[0] +width >= (width * width)&& direction === width) ||
    (currentSnake[0]% width ===width -1 && diretion === 1) ||
    (currentSnake[0]% width === 0  && diretion === 1) ||
    (currentSnake[0] - width < 0 && diretion === width);

    squares[currentSnake[0] + direction].classList.contains("snake") // if snake go into hisself;
  ) 
  {
    return clearInterval(interval)
  }



}

































function control(e){
  squares[currentIndex].classList.remove("snake")

  if (e.keyCode === 39){
    direction = 1
  }else if (e.keyCode === 38){
    direction = -width
  }else if (e.keyCode ===37){
    direction = -1
  }else if (e.keyCode=== 40){
    direction = -width
  }
}

document.addEventListener( "keyup", control)







})