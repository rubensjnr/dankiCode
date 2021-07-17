var arr = ['Rubens','Netto','Lucas'];
var teste = ['Rubao', 'Nucci', 'Pauka']
var num = [1,2,3,4,5]

    arr.push = 'Felipe';

for(i = 0; i < arr.length ; i++){
    console.log('Colocação: '+arr[i]);

}
console.log('====================');

arr.forEach(function(value,index){
    console.log(value,index);
})
console.log('====================');
teste.forEach(function(value,index){
    console.log(value+' na posição: '+index)
})

num.forEach(function(value,index){
    console.log(value,index)
})