let input =[];
input[0] = "DLDRDDDLULDRRLUDDLDUURDRDUULDRDDRRLDLLUUDDLLRLRDRUURLUDURDDRURLUDDUULUURLLRRRRUDULUDLULLUURRLLRRURRUDUUURRLUUUDURDLLLDULDRLRDDDUDDUURLRRRURULLUDDUULDRRRDDLRLUDDRRDLRDURLRURUDDUULDDUUDDURRLUURRULRRLDLULLRLRUULDUDDLLLRDDULRUDURRDUUDUUDDUULULURDLUDRURDLUUDRDUURDDDRDRLDLDRURRLLRURURLLULLRRUULRRRRDLDULDDLRRRULRURRDURUDUUULDUUDRLDDLDUDDRULLUDUULRRRDRRDRDULDLURDDURLRUDLURLUDDDRLLURUUUUUUURUULDUUDDRLULRUDURRDLDUULLRLULLURDDDDDLRRDLRLLDDUDRRRDDURDLRRUDDUDLRRRDDURULRURRRLDRDUDLD"
input[1] = "LRRDUDUUUDRRURRDUUULULUDDLLDRRRUDDUULRRDRUDRLLRLRULRRDUUDRLDURUDLLLDRRDLRLUUDRUDRRRUDRRRULDRRLLRDDDLLRDDRULRLLRUDRLLLULDLDDRDRUUUUUULURLLRUDRDRLLULLRUUURRDRULULUDLDURRUUDURLLUDRDLDDULUDLRDDRLRLURULDRURRRRURRDDUDRULUUUDDDRULRULDLLURUUULRDDLRUURLRLDLUULLURDRDDDUDDDRLDRDLLDRDDDDURLUUULDDRURULUDDURDRDRLULDULURDUURDRLLUUUULRULUUDRLLDDRRURUURLDLLRRRDLRURDDLDLDRLRRDLDURULDDLULRRRUUDLRDUURDURLURDDLDLRURLLLDRDULDDRUDDULDDRRLDLRDRDLDUUDLUULRLUDUUDUUUULDURULRRUDULURLRLDRLULLLDUDLLLRUDURDDDURLDDLRLRRDLUDLDDDDLULDRLDUUULDRRDDLRUULDLULUUURUDDRLDDDULRUDRURUURUUURRULRURDURLLRLLUULUULURDRLLUDDLU"
input[2] = "LLDURDUDRLURUDRLRLUDDRRURDULULDDUDUULRRLRLRRDRDRDURRLRLURRLRUDULLUULLURUDDRLDDDRURLUUDLDURRDURDDLUULRDURRUUURLRRURRDRDRDURRRLULLDRUDLRUDURDRDDLLULLULRRUDULDDRDRRDLLLDLURLRDRDLUDDRLDDLDRULDURLLRLDRDLUDDDDLDUUDRLLRRRRLDDRRLRLURLLRLLUULLDUUDLRDRRRDRDLLDULLDRLDDUDRDDRURRDDLRDLRRUUDRRRRDURUULDRDDURLURRRRURRDRRULULURULUUUDRRRLDLLLDDRULRUDDURDRLDDRDLULLLRURUDRLRDDLDLRRRUURDURLDURRUUDDLRDRUUUURDLRLULRUUDRLDLULLULUURURDULUDUDRRRLLRLURLLDLRRURURRUDLUDDDDRDUDUDUUUULLDRDLLLLUUUUDRLRLUDURLLUDRUUDLLURUULDDDDULUUURLLDL"
input[3] = "DLULLRDLRRLLLDLRRURRDRURDRUUULDDRLURURRDLRRULUUDDRLRRLDULRRUUDUULDDDUDLLDLURDRLLULLUUULLDURDRRRDDLRDUDRRRLRLDRRLRLULDDUDURRRLDLRULDULDDUDDRULDLDRDRDDRUDRUDURRRRUUDUDRLDURLDLRRUURRDDUDLLDUDRRURRLRRRRRLDUDDRLLLURUDRRUDRLRDUDUUUUUDURULLDUUDLRUUULDUUURURLUUDULDURUDDDLRRRDDRRDLRULLLRDDRLRLUULDUUULLLLDLRURLRRDURRLDLLLDURDLLUDDDLLDDURDDULURDRRRDDDLDDURRULUUDDLULLURULUULDLDDLUDRURURULUDDULRDRLDRRRUUUURUULDRLRRURRLULULURLLDRLRLURULRDDDULRDDLUR"
input[4] = "RURRULLRRDLDUDDRRULUDLURLRRDDRDULLLUUDDDRDDRRULLLDRLRUULRRUDLDLLLRLLULDRLDDDLLDDULLDRLULUUUURRRLLDRLDLDLDDLUDULRDDLLRLLLULLUDDRDDUUUUDLDLRRDDRDLUDURRUURUURDULLLLLULRRLDRLRDLUURDUUDLDRURURLLDRRRLLLLRDLDURRLRRLLRUUDDUULLRLUDLRRRRRURUDDURULURRUULRDDULUUDUUDDRDDDDDUUUDDDRRLDDRRDDUUULDURLDULURDRDLLURDULRUDRUULUULLRRRRLRUUDDUDLDURURLRRRULRDRRUDDRDDRLRRRLRURRRUULULLLUULLLULLUDLRDLDURRURDLDLRDUULDRLLRRLDUDDUULULR"


let keypad = [[1,2,3],[4,5,6],[7,8,9]]
let currButtCoords = [1,1]

for (var i = 0; i < input.length; i++) {
  input[i].split('')
  for (instruction of input[i]) {
    let vec = [0,0]
    switch (instruction) {
      case "U":
        vec = [1,0]
        break;
      case "D":
        vec = [-1,0]
        break;
      case "L":
      vec = [0,-1]
        break;
      case "R":
      vec = [0,1]
        break;
      default:

    }
    let newButtonCoords = addVecs(currButtCoords,vec)
    currButtCoords = boundCheck(newButtonCoords)
  }
  console.log(`i is ${i} press ${keypad[currButtCoords[0]][currButtCoords[1]]}`);
}

function addVecs(vec1, vec2) {
  return [vec1[0]+vec2[0], vec1[1] + vec2[1]]
}

function boundCheck(coords) {
  if (coords[0] < 0)  coords[0] = 0
  if (coords[0] > 2)  coords[0] = 2
  if (coords[1] < 0)  coords[1] = 0
  if (coords[1] > 2)  coords[1] = 2
  return coords
}
