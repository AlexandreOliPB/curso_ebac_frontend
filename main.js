function calculaValor(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    if(valor1 > valor2)
    alert("Formulário inválido: Primeriro valor maior que o segundo!");
    
    else if(valor2 > valor1)
    alert("Formulário válido: Segundo valor maior que o primeiro!");

    else alert("Você digitou valores iguais!");
}