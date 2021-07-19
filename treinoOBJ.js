var person = [{
    'nome': 'Rubens',
    'idade': '24',
    'profissao': 'Assistente Financeiro',
    'curso': 'Analise e Des. Sistemas',
    'faculdade': 'Fatec Ourinhos',
    'periodo': 'Noturno',
},
{
    'nome': 'Laciani',
    'idade': '28',
    'profissao': 'Gerentona foda da Drogasil',
    'curso': 'Segurança da Informação',
    'faculdade': 'Fatec Ourinhos',
    'periodo': 'Noturno',
}]

person.push = {
    'nome': 'Tadeu',
    'profissao':' Voce nao sabe nem eu',
}

console.log(`O estudante ${person[0].nome} possui ${person[0].idade} anos de idade, atualmente trabalha na area de ${person[0].profissao}, o mesmo cursa ${person[0].curso} na faculdade ${person[0].faculdade}, no periodo ${person[0].periodo}`)
console.log('=====================================')
console.log(`A ex estudante da ${person[1].faculdade}, ${person[1].nome}, hoje é ${person[1].profissao}... ${person[1].nome}, fique sabendo que o ${person[0].nome} gosta muito de você, Boa noite Migona!!`)
console.log('=====================================')
person.forEach(function(value, index){
    console.log(value)
    console.log('=====================================')
    console.log(person)
})
    

