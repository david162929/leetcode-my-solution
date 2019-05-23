/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    // 由左至右讀下去，讀到 I,X,C 再多讀下一位看是否是扣除的寫法
    const array = s.split("");
    let count = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] === "M") {
            count += 1000;
        } else if (array[i] === "D") {
            count += 500;
        } else if (array[i] === "C") {
            if (array[i+1] === "M") {
                count += 900;
                i++;
            } else if (array[i+1] === "D") {
                count += 400;
                i++;
            } else {
                count += 100;
            }
        } else if (array[i] === "L") {
            count += 50;
        } else if (array[i] === "X") {
            if (array[i+1] === "C") {
                count += 90;
                i++;
            } else if (array[i+1] === "L") {
                count += 40;
                i++;
            } else {
                count += 10;
            }
        } else if (array[i] === "V") {
            count += 5;
        } else if (array[i] === "I") {
            if (array[i+1] === "X") {
                count += 9;
                i++;
            } else if (array[i+1] === "V") {
                count += 4;
                i++;
            } else {
                count += 1;
            }
        } else {
            console.log("something wrong.");
        }
    }
    return count;
};

console.log("III: " + romanToInt("III"));
console.log("IV: " + romanToInt("IV"));
console.log("IX: " + romanToInt("IX"));
console.log("MMCDLXXIV: " + romanToInt("MMCDLXXIV"));

/* 別人解法： */
var romanToInt2 = function(s) {
    var romanMap = {
       "I" : 1,
       "V" : 5,
       "X" : 10,
       "L" : 50,
       "C" : 100,
       "D" : 500,
       "M" : 1000
   };
   
   var num = 0;
   var romanEqv = 0;
   for(var i = 0; i < s.length; i++) {
      romanEqv = romanMap[s.charAt(i)];
       if(i != s.length - 1 && romanEqv < romanMap[s.charAt(i + 1)]) {
           num = num - romanEqv;
       }
       else {
           num = num + romanEqv;
       }
   }
   return num;
};

var romanToInt3 = function(s) {
    let hash = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    let res = 0
    s=s.replace('IV','IIII').replace('IX','VIIII')
    s=s.replace('XL','XXXX').replace('XC','LXXXX')
    s=s.replace('CD','CCCC').replace('CM','DCCCC')
    
    for(let i=0,length=s.length;i<length;i++) res+=hash[s.charAt(i)]
    
    return res
}