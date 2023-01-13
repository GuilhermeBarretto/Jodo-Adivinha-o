var numberToFind = 0;
var attemps = 0;

function refresh(){
    //Gera um número aleatório
    attemps = 0;
    numberToFind =parseInt (Math.random() *100);
    console.log(numberToFind);


}

function verifyNumber(){

    var bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1) 
    {
        alert('Aposta Inválida! :( ')
        return;
    }

    if (bet>numberToFind){
        attemps++
        alert('O Número a ser encontrado é menor!');
    }

    else if(bet<numberToFind){
        attemps++;
        alert('O Número a ser encontrado é maior!');
    }
    else {
        alert('PARABÉNS! VOCÊ ACERTOU!! com ' +attemps+' erros');
        refresh();
    }


}

refresh();
