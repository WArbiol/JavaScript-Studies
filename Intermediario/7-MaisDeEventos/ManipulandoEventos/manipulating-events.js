function doChange() {
    alert(event.target.value)
}

/* 
No addEventListener se passa o objeto de 
funcão, a função SEM o parentes caso seja uma
não anonima 
   element.addEventListener("change", doChange)
*/

/* Podemos criar o evento  pelo código:

   let changeEvent = new Event("change")
   undefined
   sampleInput.dispatchEvent(changeEvent) 
*/

/* E para removedor o EventListener:
   
   sampleInput.removeEventListener("change", doChange)
*/