/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let ticket = 0;
    for (el of s){
        el == "(" ? ticket++ : 0;
        ticket > 1 ? result += el: 0;
        el == ")" ? ticket-- : 0;
    }
    return result;

};