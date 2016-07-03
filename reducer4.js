var reducer =  function(accum, item, index, array){
	var initVal = accum + item;
	
	if(index === array.length - 1){
		return initVal / array.length;
	}
	return initVal;
}

var data = [1,2,3,4,5,6];

var total = data.reduce(reducer,0);
console.log(total);