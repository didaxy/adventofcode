function binaryAgent(str) {
    str = str.split(" ")
    // splits so i can get each bit of binary
    var values = [1, 2, 4, 8, 16, 32, 64];
    // values for binary (powers of 2 as you go up)
    var letterBinary = 0;
    // this is where i will total the value of the binary bit
    var sentence = [];
    var check = []
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].split("").reverse()
        // go through, reverse and grab each bianry bit
        for (var j = 0; j < str[i].length; j++) {
            // checking each number. I start at 1 since the first digit is ignored
            if (Number(str[i][j]) === 1) {
                // if the current number is a 1, we will find its value in values
                letterBinary += values[Number(str[i][j])];
                // adding that value to the sum
            }
        }
        check.push(letterBinary)
        sentence.push(String.fromCharCode(letterBinary));
        // turning that number to hopefully a letter
        letterBinary = 0;
        // reseting the value of the binary each bit of binary
    }
    console.log(check)
    return sentence.join('');
    // return finallized sentence
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

console.log(parseInt("0111", 2));
