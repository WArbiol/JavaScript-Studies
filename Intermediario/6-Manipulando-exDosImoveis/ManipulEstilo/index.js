function setbluebackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
    // background-color -> backgroundColor 
}
function settransparentbackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "transparent"
}
function setredcolor(){
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}
function removeredcolor(){
    let element = document.getElementById("style-text")
    element.classList.remove("red-color")
}