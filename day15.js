// console.log("yo there");
//
// let afac = 16807, bfac = 48271
// let divby = 2147483647
//
// // Generator A starts with 516
// // Generator B starts with 190
//
// // let acc = [516, 190]
let aacc = 65, bacc = 8921
// let count = 0
// let aqueue = []
// let bqueue = []
//
// let loopgoal = 10
// let pairs = 0
// let i = 0
//
// do {
//   // console.log(pairs);
//   aacc = (aacc * afac) % divby
//   bacc = (bacc * bfac) % divby
//
//   if (aacc % 4 == 0) aqueue.push(aacc)
//   if (bacc % 8 == 0) bqueue.push(bacc)
//
//   if (aqueue.length > 0 && bqueue.length > 0) {
//     pairs++
//     // console.log(pairs);
//     // console.log(`aqueue ${aqueue}, bqueue ${bqueue}`);
//     atail = aqueue.shift().toString(2).slice(-16)
//     btail = bqueue.shift().toString(2).slice(-16)
//     // console.log(`${atail}`);
//     // console.log(`${btail}`);
//     // console.log(`${atail == btail}`);
//     // console.log(`---`);
//     // console.log(`aqueue ${aqueue}, bqueue ${bqueue}`);
//
//     if (atail == btail) {
//
//       count++
//     }
//   }
//   i++
// } while (pairs < 5000000)
// console.log(count, pairs);
//
// // dec = 100
// // console.log(dec.toString(2));
// // console.log(count);
// // arr = [1,2,3]
// // test = arr.shift()
// //
// // console.log(test, arr);
//let aacc = 65, bacc = 8921
// // let acc = [516, 190]

let A = 516, B = 190;
let score = 0;

for (let i = 0; i < 5E6; i++) {
    do { A = (A * 16807) % 2147483647; } while (A & 3);
    do { B = (B * 48271) % 2147483647; } while (B & 7);
    if ((A & 0xFFFF) == (B & 0xFFFF)) score++;
}

console.log(score);
