/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let res = [];
    
    for(let i = 0; i < s.length; i++){
        s[i] !== res[res.length-1] ? res.push(s[i]) : res.pop();
        
    }
    return res.join("")
  
};