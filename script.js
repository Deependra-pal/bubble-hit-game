var timer = 10;
var score = 0;
var hitrn = 0;

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function getScore(){
     score += 10;
     document.querySelector('#totalScore').textContent = score
}

function bubble() {
  var clutter = "";

  for (let i = 1; i <= 168; i++) {
    var c1 = Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${c1}</div>`;
    console.log(clutter);
  }
  var bbl = document.querySelector("#p-bottom");
  bbl.innerHTML = clutter;
}
 
function runTimer() {
  var timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      var time = document.querySelector("#timerValue");
      time.textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector('#p-bottom').innerHTML = `<h1>Game Over </h1>`
       
      
    }
  }, 1000);
}
getNewHit()
runTimer();
bubble(); 
 
document.querySelector('#p-bottom')
.addEventListener("click",(val)=>{
var clickNumber = Number(val.target.textContent);
 if(clickNumber===hitrn){
      getScore();
      bubble()
      getNewHit()
 } 
   
})
