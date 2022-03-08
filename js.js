function Converter() {
    //parte em que o JS pega os atributos do HTML
    var valorElemento = document.getElementById("valor"); //getElementById quer dizer que pegou o elemento pelo ID
    var valor = valorElemento.value; //muitos elementos do html tem o value e esta pegando o valor dentro dele
    var valorEmDolarNumerico = parseFloat(valor); //é uma função que coloca o numero em casa decimal que seria numero com virgula ex: 22,75
    //console.log(valorEmDolarNumerico);
  
    //Essa parte faz o calculo da conversão do real para o dolar
    var valorEmReal = valorEmDolarNumerico * 5.07; //o valor em real é igual ao valor em dolar vezes a cotação do dolar
    console.log(valorEmReal); //essa parte visualmente é para o programador pq ela só aparece no console do navegador

    //a ultima parte do primeiro conversor é a parte que imprime na tela para o usuario saber qual foi o valor final
    var elementoValorConvertido = document.getElementById("valorConvertido"); //ele esta pegando o id do html no h2 e imprimindo na tela
    var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2); //essa é a parte que aparece a mensagem na tela + o valor em real com toFixed(2) que quer dizer que é para imprimir na tela apenas dois numero após a virgula
    elementoValorConvertido.innerHTML = valorConvertido; //essa parte ela une as duas parte a acima, que quer inserir o conteudo acima do valor convertido com a mensagem
}

function Converter2() {
   //parte em que o JS pega os atributos do HTML
   var valorDoelemento = document.getElementById("valor2");//getElementById quer dizer que pegou o elemento pelo ID
   var valor2 = valorDoelemento.value;//muitos elementos do html tem o value e esta pegando o valor dentro dele
   var valorEmRealNumerico = parseFloat(valor2);//é uma função que coloca o numero em casa decimal que seria numero com virgula ex: 22,75
   //console.log(valorEmDolarNumerico);

   //Essa parte faz o calculo da conversão do dolar para o real
   var valorEmDolar = valorEmRealNumerico / 5.07; //o valor em real é igual ao valor em dolar vezes a cotação do dolar
   console.log(valorEmDolar);//essa parte visualmente é para o programador pq ela só aparece no console do navegador

   //a ultima parte do primeiro conversor é a parte que imprime na tela para o usuario saber qual foi o valor final
   var elementoValorConvertido2 = document.getElementById("valorConvertido2"); //ele esta pegando o id do html no h2 e imprimindo na tela
   var valorConvertido2 = "O resultado em Dólar é U$ " + valorEmDolar.toFixed(2);//essa é a parte que aparece a mensagem na tela + o valor em real com toFixed(2) que quer dizer que é para imprimir na tela apenas dois numero após a virgula
   elementoValorConvertido2.innerHTML = valorConvertido2; //essa parte ela une as duas parte a acima, que quer inserir o conteudo acima do valor convertido com a mensagem
}
  


  