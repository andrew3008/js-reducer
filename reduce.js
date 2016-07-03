var data = [20,30,40];

var reducer = function(accum, item){
    return accum + item;
}

var initVal = 10;

var total = data.reduce(reducer, initVal);

console.log("The sum is", total);