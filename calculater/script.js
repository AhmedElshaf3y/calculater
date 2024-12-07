const result = document.getElementById("screen")

function screen_btn(s){
    
    result.innerText += s
}
function deletAll(d){
    result.innerText = d
}
function equal(){
    result.innerText = eval(result.innerText)
}
function delet(){
    result.innerText = result.innerText.slice(0 , -1)
}