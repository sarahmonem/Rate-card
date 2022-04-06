let choosen = 1 ;
document.getElementById("rate").innerText = choosen
var btns = document.getElementsByClassName("numb")
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
     choosen = this.innerText

     document.getElementById("rate").innerText =  ` ${choosen} `
  })
}

function submit () {
    let card1 = document.getElementById('card1')
    let thanksCard = document.getElementById('card2') 
    
    card1.style.display = "none"
    thanksCard.style.display = "block"
}

