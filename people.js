
var count = 0

function increment() {
    var countEl = document.getElementById("count-el")
    count = count + 1
    countEl.innerText = count
}
function save() {
    var countEl = document.getElementById("count-el")
    let saveEl=document.getElementById("save-el")
    countStr=count+" - "
    saveEl.textContent+=countStr
    countEl.innerText=0
}
function fullname()   //Practice question
{
    let firstName="Rupesh"
    let lastName="Kumar"
    let fulName=firstName+lastName
    console.log(fulName)
}

let myPoint=3
function increse(){
    myPoint=myPoint+3
    console.log(myPoint)
}
function decrese()
{
    myPoint=myPoint-1
    console.log(myPoint)
}
increse()



