/*const PI = 3.1415
const Mensagem = "Oiê!"

var nome = "Ana"
var valor1 = parseFloat(prompt("Informe o valor1: "))// vai aparecer um pop-up como se fosse o alert,  ira atribuir o valor á variável
var valor2 = parseFloat(prompt("Informe o valor2: "))// vai aparecer um pop-up como se fosse o alert,  ira atribuir o valor á variável

var resultado = valor1 + valor2
alert(resultado)*/

var num1 = parseInt(prompt("Digite um numero:"))
var num2 = parseInt(prompt("Digite outro:"))
var operador = prompt("Digite o operador:")

if (isNaN(num1) || isNaN(num2)) {
	alert("O valor informado não é um número válido!")
} else {
	alert('O valor informado é válido!')
	num1 = parseFloat(num1)
    num2 = parseFloat(num2)
}

if(operador == "+"){
    alert(num1 + num2)
} 
else if(operador == "-"){
    alert(num1 + num2)
} 
else if(operador == "/"){
    alert(num1 / num2)
} 
else if (operador == "*"){
    alert(num1 * num2)
} 