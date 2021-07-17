var arr = ['Rubens','Netto','Lucas'];

    arr.push = 'Felipe';

for(i = 0; i < arr.length ; i++){
    console.log('Colocação: '+arr[i]);

}
console.log('====================');

arr.forEach(function(value,index){
    console.log(value,index);
})