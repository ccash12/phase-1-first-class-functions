function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log('this is a named function ')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('returns an anonymous function')
    }
}



















// function receivesAFunction(callback) {
//     callback ();
// }

// function returnsANamedFunction() {
//     return function namedFn() {
//         console.log("this is a named function");
//     };
// }

// function returnsAnAnonymousFunction() {
//     return function() {
//         console.log("this is an anonymous function");
//     }
// }