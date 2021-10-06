function adicionar(numero1, numero2) {
	return numero1 + numero2;
}

function subtrair(numero1, numero2) {
	return numero1 - numero2;
}

window.onload = () => {
	document.getElementById('btnCalcular').onclick = () => {
		let valor1 = document.getElementById('txtValor1').value;
		let valor2 = document.getElementById('txtValor2').value;
		let operacao = document.getElementById('selOperacao').value;
		let resultado;
		// validacao isNaN()
		valor1 = parseFloat(valor1);
		valor2 = parseFloat(valor2);
		switch (operacao) {
			case 'adicao':
				resultado = adicionar(valor1, valor2);
				break;
			case 'subtracao':
				resultado = subtrair(valor1, valor2);
				break;
		}
		document.getElementById('spnResultado').innerHTML = 
			'Resultado: '+ resultado;
	}
}