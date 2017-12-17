console.log("yo");

// input = `183,0,31,146,254,240,223,150,2,206,161,1,255,232,199,88`
let oinput = `hfdlxzhv`
// oinput = `flqrgnkx`

let input

let outz = []
let outreps = []

for (var z = 0; z < 128; z++) {
  let list = []

  for (var i = 0; i < 256; i++) {
    list.push(i)
  }
  input = oinput + "-" + z.toString()
  // console.log(`input is ${input}`);
  arr = input.split('')
  input = arr.map(n => n.charCodeAt(0))
  input = input.concat([17, 31, 73, 47, 23])


  let pos = 0
  let skip = 0
  let revarr = []
  let remarr = []

  for (var m = 0; m < 64; m++) {

  // console.log(list);
  for (var i = 0; i < input.length; i++) {
    // console.log(`pos is ${pos}`);
    thislen = input[i]
    newarray = list.slice(0)
    for (var j = 0; j < thislen; j++) {
      from = (j + pos) % 256
      to = ((pos + thislen - 1 - j)) % 256
      // console.log(`from ${from} to ${to}`);
      newarray[from] = list[to]
    }
    // for (var k = 0; k < 5 - thislen; k++) {
    //   remarr.push(list[(k + thislen + pos) % 5])
    // }
    // reversed = revarr.reverse()

    // list = reversed.concat(remarr)
    // revarr = []
    // remarr = []
    list = newarray
    pos = pos + thislen + skip
    skip += 1
    // console.log(skip);
  }
  }
  // console.log(list[0] * list[1]);
  // console.log(list)
  sparse = []
  tot = 0
  for (var mm = 0; mm < 16; mm++) {
    subtot = list[16 * mm]
    for (var nn = 1; nn < 16; nn++) {
      elt = (16 * mm) + nn
      subtot = subtot ^ list[elt]
      subtot
    }
    sparse.push(subtot)
  }

  // console.log(sparse);

  outchars = []

  // sparse = [76]

  for (elt of sparse) {
    // console.log(`elt is ${elt}`);
    charcode1 = Math.floor(elt / 16)
    charcode2 = elt % 16
    char1 = charcode1.toString(16)
    char2 = charcode2.toString(16)
    // console.log(`${charcode1}, ${char1}, ${charcode2}, ${char2}`);
    outchars.push(char1)
    outchars.push(char2)
  }

  // console.log(outchars);

  final = outchars.join('')

  // console.log(`hash is ${final}`);

  // console.log(`${final}, final length: ${final.length}`);

  // console.log(final);
  let outfin = ""
  for (var i = 0; i < final.length; i++) {
    // console.log(final[0]);
    binrep = parseInt(final[i],16).toString(2);
    padded = ("0000" + binrep).slice(-4)
    // console.log(`${binrep}, ${padded}`);
    outfin += padded
    // console.log(`i is ${i} and outfin is ${outfin} length is ${outfin.length}`);
  }
  // console.log(final);
  // console.log(`${outfin}`);

  // console.log(outfin.length);

  // let thislength = 0
  // console.log(outfin);


  console.log(outfin);

  outreps[z] = outfin
  // console.log(thislength);
  // outz[z] = thislength
}

// console.log(outz.length);

totaltotal = outz.reduce((sum, n) => sum+n, 0)
// console.log(totaltotal);
// //

 console.log(outreps);


// outreps = ["a0a00000aa",
//            "aaa0aaaaaa",
//            "00000a000a",
//            "aaaaaaaaaa"]

outreps = outreps.map(n => n.split(''))

for (var i = 0; i < outreps.length; i++) {
  for (var j = 0; j < outreps[i].length; j++) {
    if (outreps[i][j] == "1") {
      outreps[i][j] = "a"
  }

    // thislength += 1
  }
}


let regions = 0
for (let i = 0; i < outreps.length; i++) {
  for (var k = 0; k < outreps[i].length; k++) {
    if (outreps[i][k] == "a") {
      regions += 1
      paintGroup(i,k)
    }
  }
}

function paintGroup(i,k) {
  console.log(`regions found = ${regions}`);
  console.log(`painting group ${i}, ${k} which holds ${outreps[i][k]}`);
  outreps[i][k] = regions.toString()
  console.log(`painting group ${i}, ${k} which holds ${outreps[i][k]}`);

  if (outreps[i + 1] && outreps[i + 1][k] == "a") paintGroup(i + 1, k)
  if (outreps[i - 1] && outreps[i - 1][k] == "a") paintGroup(i - 1, k)
  if (outreps[i] && outreps[i][k - 1] == "a") paintGroup(i, k - 1)
  if (outreps[i] && outreps[i][k + 1] == "a") paintGroup(i, k + 1)
}

console.log(`I found ${regions} regions`);
