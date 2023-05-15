function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function smallestMult(n) {
    let max = 1;
    for (let i = 2; i <= n; i++) {
        max = lcm(max, i);
    }
    return max;
}


document.getElementById('result').innerHTML += '<p>The smallest positive number that is evenly divisible by all of the numbers from 1 to 20:' + smallestMult(20); +'</p>';
