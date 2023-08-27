function flippingBits(n) {
    let bin = '';

    while (n >= 1) {
        const remainder = n % 2;
        bin += remainder;
        n = Math.floor(n / 2);
    }
    
    bin = bin.split('').reverse().join('').padStart(32, '0');
    let flipped = '';
    for (let i = 0; i < bin.length; i++) {
       flipped += bin[i] === '0' ? '1' : '0'; 
    }

    return parseInt(flipped, 2);
    
}
