console.log("yo");

input = `AlphaCentauri to Snowdin = 66
AlphaCentauri to Tambi = 28
AlphaCentauri to Faerun = 60
AlphaCentauri to Norrath = 34
AlphaCentauri to Straylight = 34
AlphaCentauri to Tristram = 3
AlphaCentauri to Arbre = 108
Snowdin to Tambi = 22
Snowdin to Faerun = 12
Snowdin to Norrath = 91
Snowdin to Straylight = 121
Snowdin to Tristram = 111
Snowdin to Arbre = 71
Tambi to Faerun = 39
Tambi to Norrath = 113
Tambi to Straylight = 130
Tambi to Tristram = 35
Tambi to Arbre = 40
Faerun to Norrath = 63
Faerun to Straylight = 21
Faerun to Tristram = 57
Faerun to Arbre = 83
Norrath to Straylight = 9
Norrath to Tristram = 50
Norrath to Arbre = 60
Straylight to Tristram = 27
Straylight to Arbre = 81
Tristram to Arbre = 90`

vals = {}

let distarr = input.split('\n')
distarr = distarr.map(n => n.split(' '))
console.log(distarr);

for (var i = 0; i < distarr.length; i++) {
  if (!vals[distarr[i][0]]) vals[distarr[i][0]] = {}
  if (!vals[distarr[i][0]][distarr[i][2]]) vals[distarr[i][0]][distarr[i][2]] = {}
  vals[distarr[i][0]][distarr[i][2]]  = distarr[i][4]

  if (!vals[distarr[i][2]]) vals[distarr[i][2]] = {}
  if (!vals[distarr[i][2]][distarr[i][0]]) vals[distarr[i][2]][distarr[i][0]] = {}
  vals[distarr[i][2]][distarr[i][0]]  = distarr[i][4]
}

console.log(vals);

let places = Object.keys(vals)

// console.log(places);
//
// console.log(calcDist(places));

function calcDist(arr) {
  let result = arr.reduce((sum, n, index, arr) => {
  if (index != 0) {
    return sum + Number(vals[n][arr[index - 1]])
  } else {
    return sum
  }
},0);
return result
}

const perm=xs=>{let ret=[];for(let i=0;i<xs.length;i=i+1){let rest=perm(xs.slice(0,i).concat(xs.slice(i+1)));if(!rest.length){ret.push([xs[i]])}else{for(let j=0;j<rest.length;j=j+1){ret.push([xs[i]].concat(rest[j]))}}}return ret};


let allroutes = perm(places)

let distances = allroutes.map(n => calcDist(n))

// console.log(distances);

let minimumChips = Math.min(...distances)
let maximumOverdrive = Math.max(...distances)

console.log(`shortest route is: ${minimumChips} bananas long`);
console.log(`longest route is: ${maximumOverdrive} bananas long`);

// console.log(allroutes);

// allroutes.map((list) => list.reduce
