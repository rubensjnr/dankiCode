function teste(){
    console.log('Chamando a função teste');
}
function teste2(nome,idade){
    console.log ('O nome passado é: ' +nome);
    console.log('A idade do Rubens é: '+idade);
}

teste2('Rubens',24);

teste();

console.log('-----------------------')

function pegarNome(parametro){
    if(parametro == 1){
    return "Rubens Junior";
} else {
    return "Outro nome";
}
}
var nome = pegarNome(1);
console.log(nome);