"use strict";

// console.log("yo");

let input = `hepxxyzz`
console.log(acceptable(input));

let count = 0

do {
  input = increment(input)
  count++
  console.log(`I incremented your input ${count} times and you got: ${input}`);
// } while (count < 2)
} while (!acceptable(input, count))


console.log(`new password is: ${input}`);

function acceptable(str, count) {
  let first, second, third, runfound, pairsfound
  // if (count > 2) return true

  //reject it if it has stinky letters
  if (str.includes('i') || str.includes('o') || str.includes('l')) {
    // console.log(`err, what's this doing here?`);
    return false
  }

  //scan it for 3-runs
  runfound = false
  // console.log(`just checking this string. It's "${str}"`);
  for (var i = 0; i < str.length - 2; i++) {
    first = str.charCodeAt(i)
    second = str.charCodeAt(i + 1)
    third = str.charCodeAt(i + 2)
    if ( second - first === 1 && third - second === 1) {
      runfound = true
      // console.log(`duh, I foun a run: ${first}, ${second}, ${third}`);
    }
  }

  //check for two pairs
  pairsfound = false
  for (var i = 0; i < str.length - 3; i++) {
    if (str[i] == str[i+1]) {
      // console.log(`I found a pair of ${str[i]}'s, still looking...'`);
      for (var j = i+2; j < str.length; j++) {
        if (str[j] == str[j+1]) {
          // console.log(`I found the two pairs you were after
          //              APPARENTLY, there's a pair of ${str[i]}'s and a pair of ${str[j]}'s`);
          pairsfound = true
        }
      }
    }
  }

  //

  if (runfound && pairsfound) {
    console.log(`THIS ONE's got the lot, boss. She's a beauty!`);
    return true
  }

  return false
}

function increment(str) {
  // console.log(`the string I'm incrementing is ${str.length}`);
  let head = str.slice(0,str.length -1)
  // console.log(`the head of this string is: ${head}`);

  let tail = str[str.length - 1]
  // console.log(`the tail of it is: ${tail}`)

  let newtail = incChar(tail)
  // console.log(`the new tail will be: ${newtail}`);

  if (newtail == 'a') head = increment(head)

  let newstr = head + newtail
  return newstr
}

function incChar(c) {
  let code = c.charCodeAt(0)
  // console.log(`I am incrementing a char and it's code is: ${code} (it was a "${c}")`);
  code++
  if (code == 123) code = 97
  let newchar = String.fromCharCode(code)
  // console.log(`phew, done incrementing. You got "${newchar}"`);
  return newchar
}

let test = "123456789"
console.log(test.slice(4));
