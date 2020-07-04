url = "https://ada48db0-94ea-46f5-bcd6-03bad4eed780.mock.pstmn.io/"
var api = []

axios.get(url).then(function (response) {
    data = response["data"]
    api = data
})

let curWord = document.getElementById("currentWordEle")
let input = document.getElementById("inputEle")
let loader = document.getElementsByClassName("loader")[0]
let countdownNumber = document.getElementById("countdown-number")
let countdownContainer = document.getElementById("countdown")
let circle = document.getElementsByTagName("circle")[0]
var time = 10;
//countdownNumber.textContent = time;
var usedWord = []
var eligibleWords = []
var plaWord
var first
var last
var interval

function load() {
    console.log("load")
    plaWord = input.value.toLowerCase()
    input.value = ""
    if (!api.includes(plaWord)) {
        console.log(1)
        input.style.backgroundColor = "#red"
        curWord.textContent = "Không có nghĩa"
        curWord.style.color = "red"
        // input.value = "Nhập lại nhé"
        // input.style.color = "#fff"
        input.style.fontStyle = "italic"
        // input.style.fontSize = "0.8em"
        return
    }
    if (usedWord.includes(plaWord)) { 
        console.log(2)
        input.style.backgroundColor = "red"
        return
    }
    if (last!=null) {
        if (plaWord.split(" ")[0]!=last) {
            console.log(3)
            input.style.backgroundColor = "red"
            return
        }
    }

    circle.style.animationPlayState = "paused"
    countdownContainer.style.display = "none"
    if (interval!=null) { clearInterval(interval) }
    time = 10

    input.style.backgroundColor = "white"

    loader.style.display = "inline"
    loader.style.animationPlayState = "running"
    
    setTimeout(function(){
        loader.style.animationPlayState = "paused"
        loader.style.display = "none"
        process()
        console.log(loader.style.animationPlayState)
    }, 2000)
    
}

function process() {
    usedWord.push(plaWord)
    plaWordSplit = plaWord.split(" ")
    last = plaWordSplit[plaWordSplit.length-1]
    eligibleWords = searchWord(last)
    if (eligibleWords.length>0) {
        let KillWords = findKill()
        console.log(eligibleWords)
        console.log(KillWords)
        if (KillWords.length>0) {
            comWord = KillWords[rand(KillWords)]
        }
        else {
            comWord = eligibleWords[rand(eligibleWords)]
        }
        usedWord.push(comWord)
        curWord.textContent = comWord
        comWordSplit = comWord.split(" ")
        last = comWordSplit[comWordSplit.length-1]

        countdownNumber.textContent = time
        countdownContainer.style.display = "inline"
        console.log("aaa")
        circle.style.animationPlayState = "running"
        interval = setInterval(function() {
            console.log(time)
            time -- 
            if (time<=0) {
                circle.style.animationPlayState = "paused"
                countdownContainer.style.display = "none"
                clearInterval(interval)
                curWord.textContent = "Computer wins"
                last = null
                usedWord = []
                input.style.backgroundColor = "white"
            }
            countdownNumber.textContent = time
        }, 1000);
    } 
    else {
        curWord.textContent = "You win"
        last = null
        usedWord = []
    }
    //location.reload()
    eligibleWords = []

}

function rand(Arr) {
    return (Math.floor(Math.random() * Arr.length))
}

function searchWord(key) {
    var arr = []
    for (let i=0; i<api.length; i++) {
        apiWordSplit = api[i].split(" ")
        first = apiWordSplit[0]
        if (key==first) { 
            if (!usedWord.includes(api[i])) {
                arr.push(api[i])
            }
        }
    }
    return arr
}

function findKill() {
    var killWords = []
    for (let i=0; i<eligibleWords.length; i++) {
        split = eligibleWords[i].split(" ")
        tempLast = split[split.length-1]
        //console.log(tempLast)
        if (searchWord(tempLast).length==0) {
            killWords.push(eligibleWords[i])
        }
    }
    //console.log(killWords)
    return killWords
}

