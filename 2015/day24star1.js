let input = `1
2
3
7
11
13
17
19
23
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113



`

let arr = input.trim().split('\n').map(n => Number(n)).reverse()

console.log(arr);

let total = arr.reduce((sum, n) => sum + n, 0)
console.log(`there are ${arr.length} items. total is ${total}, a third of which is ${total / 3}`);

let athird = total / 3

//find all the ways of making athird with the array
let candidates = findallways(athird, arr)

function findallways(goal, arr) {
  let total = 0
  let a = 0
  total += arr[a]
}

// function permute(permutation) {
//   var length = permutation.length,
//       result = [permutation.slice()],
//       c = new Array(length).fill(0),
//       i = 1, k, p;
//
//   while (i < length) {
//     if (c[i] < i) {
//       k = i % 2 && c[i];
//       p = permutation[i];
//       permutation[i] = permutation[k];
//       permutation[k] = p;
//       ++c[i];
//       i = 1;
//       result.push(permutation.slice());
//     } else {
//       c[i] = 0;
//       ++i;
//     }
//   }
//   return result;
// }
//
// test = permute(arr);

function getPermutations(array, size) {

    function p(t, i) {
        if (t.length === size) {
            result.push(t);
            return;
        }
        if (i + 1 > array.length) {
            return;
        }
        p(t.concat(array[i]), i + 1);
        p(t, i + 1);
    }

    var result = [];
    p([], 0);
    return result;
}

var array = ['a', 'b', 'c', 'd'];


console.log(getPermutations(arr, 7)
              .map(n => n.reduce((sum,n) => sum + n, 0)));
