/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let sqrt = 0
    
    for(let i = 1; i * i <= x; i++){
        sqrt = i
    }
    return sqrt
};