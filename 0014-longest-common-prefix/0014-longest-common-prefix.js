/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    if (strs.length === 0) return res;
    
    for(let i = 0; i < strs[0].length; i++){
        const char = strs[0][i];
        
        for(let j = 1; j < strs.length; j++) {
            if(char !== strs[j][i]) {
                return res;
            }
        }
        res = res + char;
    }
    return res;
    
};