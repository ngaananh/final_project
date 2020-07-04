var hi = new Vivus('hi-there', {type: 'scenario-sync', duration: 10, start: 'autostart', forceRender: false, dashGap: 20}, function () {
  if (window.console) {
    console.log('Animation finished. [log triggered from callback]');
  }
}),
// obt1 = new Vivus('obturateur1', {type: 'delayed', duration: 150}),
// obt2 = new Vivus('obturateur2', {type: 'async', duration: 100}),
// obt3 = new Vivus('obturateur3', {type: 'oneByOne', duration: 100}),
// pola = new Vivus('polaroid', {type: 'scenario-sync', duration: 10, forceRender: false});

flipInner = document.getElementsByClassName("flip-card-inner");
flipBack = document.getElementsByClassName("flip-card-back");
flipCard = document.getElementsByClassName("flip-card");

console.log(flipCard[0]);
console.log("-----------")
console.log(flipInner[0])
count = 0;
flipCard[0].addEventListener("click", function(){
  if(count == 0){
    document.getElementsByClassName("flip-card-inner")[0].style.transform = "rotateY(180deg)";
    count = 1 - count;
  }else{
    document.getElementsByClassName("flip-card-inner")[0].style.transform = "rotateY(0deg)";
    count = 1 - count;
  }
  console.log(count);
})