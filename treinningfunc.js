function meuNome(){
    console.log('Rubens Junior');
}
    var nome = meuNome()
    console.log(nome);

console.log('-------------------------------');

    function nameTest(nome,idade){
        console.log('O Nome declarado é: '+nome)
        console.log('A idade declarada é: '+idade)
    }
        nameTest('Rubens', 24)

console.log('-------------------------------');
        
    function teste2(){
        return 'Rubão'
    }
        var emo = teste2()
        console.log(emo)

console.log('-------------------------------');

function pegarN(parametro){
    if (parametro == 0){
        return 'Rubens';
    } else {
        return 'Não é o Rubens';
    }
}
    var txt = pegarN(1)
    console.log(txt)
 