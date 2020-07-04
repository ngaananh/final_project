holder = document.getElementById("holder")
mgLeft = holder.style.marginLeft
// document.getElementById("holder").style.marginLeft = "-608px"
count = -608

function diChuyen(){
   count+=1;
   dem = count+"px";
   console.log(typeof dem)
   document.getElementById("holder").style.marginLeft = dem;
   console.log(count+" "+mgLeft);
}
setTimeout(diChuyen,2000)

function chayHet(){
  if(count < 0){
    setInterval(diChuyen,5)
  }else{
    document.getElementById("holder").style.marginLeft = "700px";
    setTimeout(()=>{
      window.location.assign("https://www.google.com.vn/");
    },1000)
  }
}
setInterval(chayHet,1000);