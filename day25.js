const fs = require('fs');



fs.readFile('input.day25.txt','utf8', (err, input) => {
    let line = [0]
    if (err) console.log("no file");
    let grid = JSON.parse(input)
    console.log(grid.init[1]);
    let inst = grid.init[0]
    let command
    let marker = 0
    let value, dir, nextOp, toWrite

    for (let index = 0; index < grid.init[1]; index++) {
        command = grid[inst]
        value = line[marker]
        if (value == 0) {
            //do zero
            // console.log(command[0]);
            toWrite = Number(command[0][0])
            dir = command[0][1] == "R"? 1 : -1
            nextOp = command[0][2]
        } else {
            //do one
            // console.log(command[1]);
            toWrite = Number(command[1][0])
            dir = command[1][1] == "R"? 1 : -1
            nextOp = command[1][2]
        }
        // console.log(`command is (${inst}) ${command}`);
        // console.log(`line is ${line}`);
        // console.log(`value is ${value}`);
        
        
        // console.log(`${toWrite}, ${dir}, ${nextOp}`);
        
        line[marker] = toWrite
        marker += dir
        // console.log(`marker is now ${marker}`);
        
        if (marker < 0) {
            // console.log(`add at front`);  
            line.unshift(0)
            marker = 0
        }

        if (marker > line.length - 1) {
            // console.log(`add at end`);
            
            line.push(0)
        }

        inst = nextOp
    }

    //count 1's
    console.log(`the checksum is ${line.reduce((sum,n) => sum + n, 0)}`);
    
})
