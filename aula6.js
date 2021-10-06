/*var repetir = "s";
while(repetir == "s"){
    numero1 = parseInt(prompt("Informe o número 1:"))
    numero2 = parseInt(prompt("Informe o número 2:"))
    operacao = parseInt(prompt("Informe a operacao:"))

    switch (operacao){
        case "+":
            alert(numero1 + numero2);
        break;
        case "-":
            alert(numero1 - numero2);
        break;
        case "*":
            alert(numero1 * numero2);
        break;
        case "/":
            alert(numero1 / numero2);
        break;
    }

    repetir = prompt("Deseja repetir o cálculo? (s = sim) (n = não)")
}*/

do {
    numero1 = parseFloat(prompt("Informe o numero 1:"))
    numero2 = parseFloat(prompt("Informe o numero 2:"))
    operacao = prompt("Informe a operacao:")

    if (operacao == "+"){
        alert(numero1 + numero2)
    }
    
   else if (operacao == "-"){
        alert(numero1 - numero2)
    }
    else if (operacao == "/"){
        alert(numero1 / numero2)
    }
    
    else if (operacao == "*"){
        alert(numero1 * numero2)
    }
    
}while (confirm("Deseja repetir a operação?"))