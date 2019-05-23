/* https://leetcode.com/problems/palindrome-number/ */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const str = x.toString();
    const all = str.length;
    for (let i=0; i<Math.floor(all/2); i++) {
        if (str.charAt(i) !== str.charAt(all-1-i)) {
            return false;
        }
    }
    return true;
};


// Follow up 說試試看不使用轉成 string 的方法做
const isPalindrome2 = function(x) {
    if (x<0) {
        return false;    
    }
    // 轉成數字陣列
    let digit = 10;
    let array = [];
    while (x%digit !== x) {
        let num = x%digit;
        array.push(num/digit*10);
        digit = digit*10;
        x = x-num;
    }
    array.push(x/digit*10);
    console.log(array);
    let len = array.length;
    
    for (let i=0; i<Math.floor(len/2); i++) {
        if (array[i] !== array[len-1-i]) {
            return false;
        }
    }
    return true;
};

/* 別人的神 code */

const isPalindrome3 = (x) => {
    if (x < 0) {
        return false
    }
    if (Math.floor(x) !== x) {
        return false
    }
    if (x < 10) {
        return true
    }
    let y = x
    let r = 0
    while (y > 0) {
        r = r * 10 + y % 10
        y = Math.floor(y / 10)
    }
    return x === r
}