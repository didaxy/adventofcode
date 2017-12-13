console.log("yo");

var add = (function () {
    var counter = 0;
    return function () {
      console.log(`counter was ${counter}, now it's ${counter + 1}`)
      return counter += 1;
    }
})();

add()
add()
add()
