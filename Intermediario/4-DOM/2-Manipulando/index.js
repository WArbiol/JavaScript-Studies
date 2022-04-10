let testandoChildren = false
function addNewPhone() {
    //query querySelector sem o "All", só retorna o primeiro
    const phoneForm = document.querySelector("form#phones")
    if(testandoChildren){
        console.log(phoneForm)
        console.log(phoneForm.children)
        console.log(phoneForm.children[0])
        console.log(phoneForm.children[0].children[1])
        console.log(phoneForm.children[0].children[1].value)
    }
    /* duplica um elemento node (nó) da estrutura de um documento DOM.
       node.cloneNode(deep)
       deep: true se os elementos filhos do nó que está sendo clonado 
       devem ser clonados juntos, ou false para clonar apenas o nó específico 
       dispensando, assim, qualquer elemento DOM filho.
       defaut: false */
    
    
    const newPhone = phoneForm.children[0].cloneNode(true) 
    const phonePosition = phoneForm.children.length + 1
    
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    newPhone.querySelector("input").value = ""
    
    //Adicionar filho: .appendChild
    phoneForm.appendChild(newPhone)
    console.log(phoneForm)
}

function printPhones() {
    const phones = document.querySelector("form#phones") //SelectorAll retorna lista mesmo que só de um elemento
    let message = "Telefones cadastrados:\n\n"
    for(let i = 0; i<phones.length; i++){
        message += (phones.children[i].children[0].innerText + ": " + 
                    phones.children[i].children[1].value + "\n")
    }
    alert(message)
}