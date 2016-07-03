var data = [1,2,3];

var doubled = data.reduce(function(acc, value){
	acc.push(value * 2);
	return acc;
}, []);

console.log(doubled);


var doubledMapped = data.map(function(item){
	return item * 2;
});

console.log("doubledMapped", doubledMapped);



/*find evens with reduce function*/
var data2 = [1,2,3,4,5,6];

var evens = data2.reduce(function(acc, val){
	if (val % 2 === 0){
		acc.push('even'+ val);
	}else{
		acc.push('odd'+val);
	}
	return acc;
}, []);

console.log(evens);

/*find evens with filter method*/

var evenFiltered = data2.filter(function(item){
	return (item % 2 === 0);
});

console.log(evenFiltered);

/*filter and map*/

var filterMapped = data2.filter(function(item){
	return item % 2 ===0;
}).map(function(val){
	return val *2;
});

console.log(filterMapped);


/* big data with filter and map*/


var bigData = [];


for(var i =0; i< 1000000; i++){
	bigData[i] = i;
}

console.time('bigData');
var filterMappedBigData =  bigData.filter(function(item){
	return item % 2 ===0;
}).map(function(item){
	return item * 2;
});
console.timeEnd('bigData');



/** bigdata with reducer **/
console.time('bigDataReduce');
var filterReduceBigData =  bigData.reduce(function(acc, value){
	if (value % 2 === 0){
		acc.push(value * 2);
	}
	return acc;
}, []);
console.timeEnd('bigDataReduce');
 
