timKiem = document.getElementById("timKiem")
choiVoiMay = document.getElementById("choiVoiMay")

tabTimKiem = document.getElementById("tabTimKiem")
tabChoiGame = document.getElementById("tabChoiGame")
timKiem.style.backgroundColor="#fff";
tabChoiGame.style.display = "none"

timKiem.addEventListener("click", ()=>{
  tabTimKiem.style.display = "flex";
  tabChoiGame.style.display = "none"
  timKiem.style.backgroundColor="#fff";
  choiVoiMay.style.backgroundColor="transparent";
});
choiVoiMay.addEventListener("click", ()=>{
  tabTimKiem.style.display = "none";
  tabChoiGame.style.display = "flex"
  choiVoiMay.style.backgroundColor="#fff";
  timKiem.style.backgroundColor="transparent";
});


// xu ly tim kiem 
In = document.getElementById("focusedInput")
Go = document.getElementById("chuyenDoi")
Out = document.getElementById("output")

url = "https://ada48db0-94ea-46f5-bcd6-03bad4eed780.mock.pstmn.io/"
var api = []

axios.get(url).then(function (response) {
    data = response["data"]
    api = data
})
dem = 0
Go.addEventListener("click", search)

function search() {
    // if(dem == 0){
        console.log("lala")
        InWord = In.value.toLowerCase()
        if (!api.includes(InWord)) {
            console.log(1)
            In.value = "Không hợp lệ"
            return
        }
        InWordSplit = InWord.split(" ")
        OutWords = searchWord(InWordSplit[InWordSplit.length-1])
        console.log(OutWords)
        Out.style.height = "auto"
        // Out.style.marginTop = Out.style.height /2
        count = OutWords.length;
        if (count==0){
            OutWords = ["Không tìm được từ nối"]
        }
        count = OutWords.length;
        Out.textContent = ""
        for (let i = 0; i < OutWords.length; i++) {
            var para = document.createElement("span")
            para.innerHTML = String(OutWords[i])
            para.style.display = "flex"
            para.style.width = "405px"
            para.style.textAlign = "center"
            para.style.justifyContent = "center"
            para.style.alignItems = "center"

            // para.style.marginTop = "2px"
            
            if (count==1) { para.style.height = "60px" }
            else { para.style.height = "30px" }

            console.log(para)
            Out.appendChild(para)
            // Out.insertAdjacentElement("afterend", para);
        }
        Out.style.justifyContent = "center"
            h = count*17
            h = h+"px"
            if(count==1||count==2){

                Out.style.marginTop = "0px"
            } else{

                // Out.style.marginTop = h
            }
        // console.log(c)
        // console.log(typeof c)
        // dem = 1
    // }
}

function searchWord(key) {
    var arr = []
    for (let i = 0; i < api.length; i++) {
        apiWordSplit = api[i].split(" ")
        first = apiWordSplit[0]
        if (key == first) {
            arr.push(api[i])
        }
    }
    return arr
}
// het xu ly tim kiem 
