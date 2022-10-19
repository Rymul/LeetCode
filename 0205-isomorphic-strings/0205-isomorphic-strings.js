/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    let countS = {};
    let countT = {};
    
    let res = true
    
    for( i = 0; i < s.length; i++) {
        
        if(!countS[ s[i] ] && !countT[ t[i] ]){
            countS[ s[i] ] = t[i];
            countT[ t[i] ] = s[i];
        } else if ( countS[ s[i] ] !== t[i] || countT[ t[i] ] !== s[i]) {
            res = false;
        }
        
    }
    return res;
}