/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    
    while (true) {
        slow = sq(slow);
        fast = sq(sq(fast));
        if (slow === fast) break;
    }
    return slow === 1
};

function sq(num){
    let sum = 0;
    while(num > 0){
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num/10);
    }
    return sum;
}

