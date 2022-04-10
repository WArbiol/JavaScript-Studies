
//                                             no evento "change" execute a função:
document.querySelector("select[name='select-option']").addEventListener("change", function() {
    alert(event.target.value)
})

/* No addEventListener se passa o objeto de 
funcão, a função SEM o parentes caso seja uma
não anonima */