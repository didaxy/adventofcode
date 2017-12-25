// console.log(`yo`);

// function Robit() {}

// Robit.prototype.wakeUp = function wakeUp(callback) {
//   console.log(`waking up soon and my callback is ${callback}`)
//   setTimeout(function() {
//     callback()
//     console.log('Woke up');
//   }, 600);
// };

// const dude = function iLogDude() {
//     console.log("dude!");
    
// }

// const ogrobit = new Robit


// const robit = makeChainable(ogrobit)

// robit.wakeUp(dude)

// function makeChainable(og) {
//     const handler = {
//         get: function(target, key) {
//             console.log(`I am the "get" handler`);
//             return (() => {
//                 const result = new Promise(() => target[key](()=>{}))
//                 // const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
//                 result.then(console.log(`it's me, the "get" handler, returning`))
//                 return result
//             })
//         }
//     }
//     return new Proxy(og, handler)
// }

// function promise() {
//     return new Promise(()=>{})
// }

function doThing() {
}

// function doOtherThing() {
//     console.log(`doing the other thing`)
// }

// function waitAndDoThing(callback) {
//     setTimeout(function() {
//     callback()
//     console.log('did thing');
//   }, 600);
// }

// function promised() {
//     doThing()
//     return
// }

// waitAndDoThing(promised)
// console.log(`finishing`);

// let perform = function perform(callback) {
//     // console.log(`callback is ${callback}`);
    
//     setTimeout(function() {
//       callback()
//       console.log(`first`);
      
//     }, 500);
//   };

////////
////////

// function wrapped(fn) {
//     return new Promise(resolve => fn)
// }

// async function outer() {
//     await wrapped(cb)
// }

// outer().then(console.log('second'))

// function magic() {
//     return Promise.resolve()
// }

// function wrapped() {
//     return new Promise(resolve => {
//         resolve()
//     })
// }

// let resolve = function resolve() {
//     console.log(`resolved`);
// }

// new Promise(resolve => perform(resolve))

// .then(console.log("done"))


//.then(console.log('Shut down for the day'))



// let wrapper = function wrapper() {
//     return new Promise(resolve => perform(doThing))
// }


// perform(wrappedcb).then(console.log('Shut down for the day'))




// wrapper(doThing).then(console.log('Shut down for the day'))





// function doThingThenOtherThing(cb) {
//     const actuallyWait = () => new Promise(resolve => waitAndDoThing(cb))
//     actuallyWait().then(doOtherThing());
// }    

// doThingThenOtherThing(doThing)

function waitAndDoThing(callback) {
    setTimeout(function() {
    callback()
    console.log('did thing');
  }, 600);
}

// function resolveAfter2Seconds(x) { 
//     return new Promise(resolve => waitAndDoThing(doThing));
//   }

//so, I've got a function that takes a callback, calls setTimeout passing the callback
//and then returns

//I want to wrap it in another function that will wait for the callback to return
//the callback can be anything

//so, the callback should return a promise?
//and my wrapper function, outer is async, because it's the one that needs to wait.

//

function wrapper(fn) {
  return new Promise(function(resolve, reject) {
      fn((err, result) => {
          console.log("doing thing (prom res/rej)");
          if (err) return reject(err);
          resolve(result);
      });
  });
}



  async function outer() {
    var x = await wrapper(waitAndDoThing);
    console.log('x'); // 10
  }

  outer()