let n = 20151125
let row = 1
let col = 1
let rowtide = 1

while(!conditionMet(row,col)) {
  if (row == 1) {
    col = 0
    row = rowtide + 2
    rowtide = rowtide + 1
  }
  row -= 1
  col += 1
  n = performCalc(n)
}
console.log(`${row}, ${col}, ${n}`);


function conditionMet(row,col) {
  if (row ==2981 && col == 3075) return true;
  // if (row > 10 || col > 10) return true;
  // if (row ==3 && col ==3) return true;
  return false;
}

function performCalc(n) {
  let m = n * 252533
  let rmd = m % 33554393
  return rmd
}
