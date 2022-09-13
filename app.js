function part2(input1, input2) {
    if(input1.toLowerCase().includes(input2) || input1.toUpperCase().includes(input2) || input1.includes(input2)) {
        return 'TRUE'
    } else {
        return 'FALSE'
    }
}

console.log('part2(): ', part2('BcD', 'BcD'));