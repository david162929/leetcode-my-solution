/* https://leetcode.com/problems/robot-return-to-origin/solution/ */
const judgeCircle = function(moves) {
    const array = moves.split("");
    let R = 0;
    let L = 0;
    let U = 0;
    let D = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] === "R") {
            R++;
        } else if (array[i] === "L") {
            L++;
        } else if (array[i] === "U") {
            U++;
        } else if (array[i] === "D") {
            D++;
        } 
    }
    if (R === L && U === D) {
        return true;
    }
    return false;
};