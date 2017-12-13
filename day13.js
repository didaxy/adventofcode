console.log("yo");

let input = `0: 3
1: 2
2: 4
4: 6
6: 4
8: 6
10: 5
12: 8
14: 8
16: 6
18: 8
20: 6
22: 10
24: 8
26: 12
28: 12
30: 8
32: 12
34: 8
36: 14
38: 12
40: 18
42: 12
44: 12
46: 9
48: 14
50: 18
52: 10
54: 14
56: 12
58: 12
60: 14
64: 14
68: 12
70: 17
72: 14
74: 12
76: 14
78: 14
82: 14
84: 14
94: 14
96: 14`

// input =`0: 3
// 1: 2
// 4: 4
// 6: 4`

let totals =[]


let arr = input.split('\n')



// console.log(arr);

let rarr = arr.map(n => n.split(' '))
let barr =rarr.map(n => [Number(n[0].slice(0,-1)), Number(n[1])])

console.log(barr);

let delay = 0

// do {
//
//   delay++
// } while (totals[delay] != 0 && delay < 5)

do {
  totals[delay] = 0
  let tot = 0
  let stepsizehere
  let timetogethere
  let test
  for (let i = 0; i < barr.length; i++) {
    // console.log(`i = ${i}, ${barr[i]}`);
    // console.log(`delay is ${delay}`);
    stepsizehere = (2 * (barr[i][1] - 1))
    timetogethere = (barr[i][0] + delay)
    test = timetogethere % stepsizehere
    // console.log(`${barr[i][0] + delay} seconds have passes and the range here is ${barr[i][1]}`);
    // console.log(`2 * (barr[i][1] - 1)  is ${2 * (barr[i][1] - 1)}`);
    // console.log(`formula is ${test}`);
    if (test == 0) {
      // console.log(`${barr[i][0]}, ${delay}, caught at row ${i}`);
      totals[delay] = totals[delay] + 1
      tot = tot + 1
    }

  }
  console.log(`delay was ${delay}, total was ${totals[delay]}, ${tot}`);
  delay++

} while (totals[delay - 1] != 0)

// console.log(`total is ${total}`);
