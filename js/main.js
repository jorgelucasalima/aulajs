






function botao() {
    document.getElementById("pegou").innerHTML = "Obrigado pelo clique"
    
    //alert("botão de fresco")
}


function redirecionar() {
    //window.open("https://google.com") //abre em outra aba
    window.location.href = "https://google.com" //abre na mesma aba
    
}

function redirect(elemento) {
    //document.getElementById("mouse").innerHTML = "MOUSE TROCADO."
    elemento.innerHTML = "MOUSE TROCADO..."    
}

function voltar(elemento) {
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui ..."
}



/*

function soma(numero1, numero2) {
    return numero1 + numero2
}


function validaIdade(idade) {
    var validar
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar

}

var idade = prompt("qual tua idade: ")
console.log(validaIdade(idade))

*/








/*
var contador = 0
var tempo = new Date()
for (let contador = 0; contador <= 5; contador++) {
    console.log(contador)
    console.log(tempo.getMonth() + 1)
} 

*/

/*
var contador = 0
while (contador <= 5) {
    console.log(contador)
    contador++
}

*/





/*
var idade = prompt("Qual sua idade boe ? ")

if (idade < 18) {
    alert("Você é de menor")
} else {
    var local = prompt('Tu mora onde ?')
        if (local = "recife") {
            alert('tu é gay')
        } else {
            alert('vai tomar no cu')
        }
}
*/



/*
var nome = "Jorge"
let idade = 34

var listaNomes = ["lucas", "mano", "ayra"]
var fruta = {nome: "Banana", cor: "amarela"}

alert(`${listaNomes[0]}` + " e a fruta que você gosta é " + fruta.nome)
*/