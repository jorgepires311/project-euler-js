console.log('hi');

const max = 1000;
let multiples3 = [];
let multiples5 = [];

for(let i = 1; i <= max; i++){
    if(i % 3 == 0){
        multiples3.push(i);
    }
    if(i % 5 == 0 ){
        multiples5.push(i);
    }
}
document.getElementById('result').innerHTML +='Multiples of 3:'+ multiples3 +'</p>';
document.getElementById('result').innerHTML +='<p>Multiples of 5:\n'+ multiples5 +'</p>';
