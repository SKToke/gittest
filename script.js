var numbers = [1,2,3,4,5,6];

function sum(n){
	var sumation = 0;


	//do something
	for(i=0;i<n.length;i++){
		sumation+=n[i];
	}
	return sumation;
}


console.log(sum(numbers));
