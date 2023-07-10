let campoTexto = document.getElementById("nome")
let inputBotao = document.getElementById("botao")


let lista=[];
function adicionar(){
    lista.push(campoTexto.value)
    
}

function visualizar(){
   for(let i=0; i< lista.length; i++){
    console.log(lista[i])
   }
}

let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let s = document.getElementById("soma")
let m = document.getElementById("menos")
let mu = document.getElementById("multiplicacao")
let d = document.getElementById("divisao")

function soma(){
    alert(parseInt(n1.value) + parseInt(n2.value))
    
}
function menos(){
    alert(parseInt(n1.value) - parseInt(n2.value))

}
function multiplicacao(){
    alert(parseInt(n1.value) * parseInt(n2.value))

}
function divisao(){
    alert(parseInt(n1.value) / parseInt(n2.value))

}