var assert = chai.assert
var expect = chai.expect

// expect(turnleft([0,1])).to.equal([1,0])

assert.deepEqual(turnleft([0,1]),[1,0], "left from east")
assert.deepEqual(turnleft([1,0]),[0,-1], "left from north")
assert.deepEqual(turnleft([0,-1]),[-1,-0], "left from west")
assert.deepEqual(turnleft([-1,0]),[0,1], "left from south")

assert.deepEqual(turnright([0,1]),[-1,0], "right from east")
assert.deepEqual(turnright([-1,0]),[-0,-1], "right from south")
assert.deepEqual(turnright([0,-1]),[1,0], "right from west")
assert.deepEqual(turnright([1,0]),[0,1], "right from north")

const curr = {coords: [0,0], dir: [1,0]}

const step1 = {dir: "R", num: 2}

assert.deepEqual(scalarMult([-1,-3],2), [-2,-6], "scalar failure")

assert.deepEqual(addVecs([-1,1],[1,-3]),[0,-2], "vec addition failure")

// assert.deepEqual(applyStep(curr, step1), {coords: [0,2], dir: [0,1]})
