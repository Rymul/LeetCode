/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(replaced)
    console.log(replaced.split("").reverse().join(""))
    return replaced === replaced.split("").reverse().join("");
};