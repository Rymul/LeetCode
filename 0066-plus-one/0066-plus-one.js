/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let add = false

    if(digits.length === 1 && digits[0] === 9) {
            return [1,0]
    }
    
    for (let i = digits.length - 1; i >= 0; i--){
        
        if (digits[i] < 9 && i === digits.length-1) {
            digits[i] += 1
            return digits
        } else if (i === digits.length-1) {
            digits[i] = 0
            add = true
            continue
        }
        
        if(add === true && digits[i] < 9) {
            digits[i] += 1
            return digits
        } else if (add === true) {
            digits[i] = 0
        }
        
        if ( i === 0 ) {
            digits.unshift(1)
        }
    }
        
    return digits
};