/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if (s.length === 1) return s;
    let isBad = true;
    let arr = s.split("");
    
    while(isBad){
        isBad = false;
        
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] !== arr[i+1] && arr[i].toLowerCase() === arr[i+1].toLowerCase()){
                isBad = true
                arr[i] = ""
                arr[i+1] = ""
                arr = arr.join("").split("")
            }
        }
    }
    return arr.join("")
};