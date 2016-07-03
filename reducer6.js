function increment(item){
	return item + 1;
}

function decrement(item){
	return item - 1;
}

function double(item){
	return item * 2;
}

function halve(item){
	return item / 2;
}

var initVal = 2;

var pipeline = [
	increment,
	decrement,
	double,
	halve
];

var finalVal = pipeline.reduceRight(function(acc, fn){
	return fn(acc);
}, initVal);

console.log(finalVal);