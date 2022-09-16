function part2(input1, input2) {
    let tf = 'FALSE';
    let inputD = '';
    if(input1.toLowerCase().includes(input2)
        || input1.toUpperCase().includes(input2)
        || input1.includes(input2)) {
        tf = 'TRUE';
    } else {
        for(let i = 0; i < input1.length; i++) {
            inputD = input1.replace(input1.charAt(i), '');
            if(inputD.toLowerCase().includes(input2)
                || inputD.toUpperCase().includes(input2)
                || inputD.includes(input2)) {
                tf = 'TRUE';
            }
        }
    }
    return tf;
}

console.log('part2(ebCde, BCD): ', part2('ebCde', 'BCD'));
console.log('part2(eCB, ECB): ', part2('eCB', 'ECB'));
console.log('part2(BcdEF, BCEF): ', part2('BcdEF', 'BCEF'));
console.log('part2(BCD, BcD): ', part2('BCD', 'BcD'));
