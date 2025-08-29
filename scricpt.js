             //Heart//

const heartCount = document.getElementById("heart")

const hearts = document.getElementsByClassName("heart-icon")

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function () {
        heartCount.innerText = parseInt(heartCount.innerText) + 1
    })
}

             //Copy//

const copyCount = document.getElementById("copy-count")
const copyButtons = document.getElementsByClassName("btn-copy")

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        copyCount.innerText = parseInt(copyCount.innerText) + 1
    })
}

             //Coin//

const coins = document.getElementById("coin")
const callButtons = document.getElementsByClassName("btn-call")

for (let i = 0; i < callButtons.length; i++){
    callButtons[i].addEventListener("click", function(){
        let currentCoin = parseInt(coins.innerText)

        if (currentCoin >= 20){
            coins.innerText = currentCoin - 20
        }
        else{
            coins.innerText = 0
            alert("Not enough coins!")
        }
    })
}