/* https://leetcode.com/problems/reverse-integer/ */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    if (x>0 && x<=2147483647) {
        x = `${x}`;
        let array = [];
        for (let i=0; i<x.length; i++) {
            array.unshift(x.charAt(i));
        }
        let num = parseInt(array.join(""));
        if (num>2147483647 || num<-2147483648 ) {
            return 0;
        }
        return num;
    } else if (x<0 && x>=-2147483648 ) {
        x = `${x}`;
        let array = [];
        for (let i=1; i<x.length; i++) {
            array.unshift(x.charAt(i));
        }
        array.unshift("-");
        let num = parseInt(array.join(""));
        if (num>2147483647 || num<-2147483648 ) {
            return 0;
        }
        return num; 
    } else {
        return 0;
    }
};
