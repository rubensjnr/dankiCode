var pessoas = {
    'nome': 'Rubens',
    'idade': 24,
    'profissao': 'Assistente ADM',
    'meta':'Programador',
}
console.log(`O estudante ${pessoas.nome} de ${pessoas.idade} anos de idade, tem como méta se toranar um ${pessoas.meta}, no momento, o mesmo esta trabalhando como ${pessoas.profissao}, boa sorte ${pessoas.nome}`)
console.log('====================================')
var jornal = [
    {
        'tema':'Esportivo',
        'titulo':'Futebol Brasileiro',
        'conteudo':'Palmeiras',
        'autor':'Rubens Junior',
    },
    {
        'tema':'Noticias',
        'titulo':'Economia',
        'conteudo':'Dolar',
        'autor':'Rubens Junior',
    }]
console.log('Jornal Brasil ' +jornal[0].tema)
console.log('Jornal Brasil ' +jornal[1].tema)
console.log('Escritos por ' +jornal[0].autor)