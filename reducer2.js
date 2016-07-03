var votes = [
	"angular",
	"React",
	"angular",
	"React",
	"angular",
	"jquery",
	"angular",
	"jquery",
	"React "
];

var initVal = {};

var reducer = function(tally, vote){
	if(!tally[vote]){
		tally[vote] = 1;
	}else{
		tally[vote]++;
	}
	return tally;
}

var result = votes.reduce(reducer,initVal);
console.log(result);