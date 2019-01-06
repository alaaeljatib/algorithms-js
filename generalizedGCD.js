function generalizedGCD(num, arr)
{
    // WRITE YOUR CODE HERE 
    
    let a = arr[0];

    for (let i = 1; i < arr.length; i++) {
    a = gcd(a, arr[i]);
    }
    
    return a;
}

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    
    return gcd(b, a % b);
}
