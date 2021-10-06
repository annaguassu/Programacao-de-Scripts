function listarElementos(Lista){
    var totalElementos = lista.length;
    var auxHtml = "<ul>";
    for (var i= 0; i < totalElementos; i++){
        auxHtml += "<li>" + lista[i] + "</li>";

    }

    auxHtml += "</ul>"
    return auxHtml;
}

var listaCidades = ["Taquaritinga", "Jaboticabal", "Monte Alto"]
listaCidades.push("Guariba", "Matão", "Itápolis", "Araraquara")

var listaNomes = ["Jonas", "Daiane", "Marta", "Benedito"]
listaNomes.push("Marcos", "Sabrina", "Selma")

Document.write(listarElementos(listaCidades))
Document.write(listarElementos(listaNomes))


/*var totalCidades = listaCidades.length
var auxHtml = "<ul>"
for (var i = 0; i < totalCidades; i++){
    auxHtml += "<li>" + listaCidades[i] + "</li>";
}

auxHtml += "</ul>"
document.write(auxHtml)


var totalNomes = listaNomes.length
var auxHtml2 = "<ul>"
for (var j = 0; j < totalNomes; j++){
    auxHtml2 += "<li>" + listaNomes[j] + "</li>";
}

auxHtml2 += "</ul>"
document.write(auxHtml2)*/

