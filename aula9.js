class Cliente {
    constructor(nome, cpf, rg){
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;

    }
}

var joao = new Cliente("João Souza", "111.111.111-29", "11.111.111-1")
var joao = new Cliente("Maria Silva", "111.111.211-29", "11.111.111-X")

class Calculo{
    constructor(valorEtanol, valorGasolina){
        this.valorEtanol = valorEtanol
        this.valorGasolina = valorGasolina
    }
    calcular(){
        return this.valorEtanol/this.valorGasolina
    }
}

verificarTecla = (evento) =>{
        //for(item in evento )
        //console.log(item);
        //alert(evento.keyCode);
        if(evento.keyCode < 48 || evento.keyCode > 57 || evento.keyCode == 47){
            evento.preventDefault //não insere a letra
            alert("tecla inválida!");
        }
}

window.onload = () =>{ //elemento é disparado quando carrega o evento
    document.getElementById("txtEtanol").onkeypress = (evento) =>
       verificarTecla(evento)
    document.getElementById("txtGasolina").onkeypress = (evento) =>
       verificarTecla(evento)

       document.getElementById("btnCalcular").onclick = () => {
           let valorEtanol = document.getElementById("txtEtanol").value;
           let valorGasolina = document.getElementById("txtGasolina").value;
            valorEtanol = parseFloat(valorEtanol)
            valorGasolina = parseFloat(valorGasolina)

            let calculo = new Calculo(valorEtanol, valorGasolina)
            let resultado = calculo.calcular()
            document.getElementById("spnResultado").innerHTML = resultado
       
        }
    
}
//classe =tipo do obj
