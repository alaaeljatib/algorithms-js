const cellCompete = (states, days) => {
    // WRITE YOUR CODE HERE 
    let result = states.slice();
    
    for (let i = 0; i < days; i ++) {
        result = cellCompetePerDay(result)
    }
    
    return result;
    
}
// FUNCTION SIGNATURE ENDS

const cellCompetePerDay = (states) => {
    let helper = states.slice();
    helper.push(0);
    helper.unshift(0); // total 10
    
    let result = [];
    
    for (let i= 1; i < helper.length - 1; i++) {
        result.push(helper[i - 1] ^ helper [i + 1]);
    }
    
    return result;
}

const states = [1,0,0,0,0,1,0,0];
const days = 100;
console.log('result is ', cellCompete(states, days));
