input = 277678

total = input - 1
console.log(total);
matched = false
n=1


while (!matched) {
  size = 8 * n
  oldtotal = total
  total -= size
  console.log(`${n}, ${size}, ${total}`);
  if (total < 0) {
    matched = true;
    console.log(`${n} ${size} ${total} ${oldtotal}`);
  }
  n = n+1
}
