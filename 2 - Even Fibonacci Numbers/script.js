function fibEvenSum(n){
    let fib = [1,2];
    let fibEven=[];
    for(let i = 1; i <= n;i++){

if(fib[i] % 2 === 0){
            fibEven.push(fib[i]);

        }
        fib.push(fib[i] + fib[i-1]);
    }
    return fibEven.reduce((a,b)=> a+b,0);
}
document.getElementById('result').innerHTML +='<p>Total sum of terms(1000):'+ fibEvenSum(1000) +'</p>';


function fibEvenSumMaxTerms(n){
    let fib = [1,2];
    let fibEven=[];
    for(let i = 1; fib[i-1]  <= n;i++){
        if(fib[i]  % 2 === 0){
            fibEven.push(fib[i]);
        }
        fib.push(fib[i] + fib[i-1]);
    }
    return fibEven.reduce((a,b)=> a+b,0);
}
document.getElementById('result').innerHTML +='<p>Total sum of terms less than 1000):'+fibEvenSumMaxTerms(1000) +'</p>';


