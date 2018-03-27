

function segmentTree(array){
	this.array = array;
	this.length = array.length;
	if(this.length % 2 !== 0){
		this.length+=1;
	}
	this.Initialize();
}

segmentTree.prototype.Initialize = function(){
	this.tree = [];
	this.tree.length = this.length * 2;
	Array.prototype.splice.apply(this.tree, [this.length, this.length].concat(this.array));
	for(let i=this.length -1; i>0; i--){
		this.tree[i] = this.GetValue(this.tree[2*i] ,this.tree[( 2*i ) + 1]);
	}
	console.log(this.tree)
}

segmentTree.prototype.GetValue= function(firstValue,secondValue){
	if(secondValue === undefined){
		return firstValue;
	}
	if(firstValue === undefined){
		return secondValue;
	}
	if(firstValue> secondValue){
		return secondValue;
	}
	else{
		return firstValue;
	}
}

segmentTree.prototype.getMinimum = function(first,last){
	let firstIndex = first + this.length;
	let lastIndex = last + this.length;
	let value;
	while(firstIndex<lastIndex){
		if(firstIndex % 2 !==0){
			value = this.GetValue(this.tree[firstIndex],value);
      		firstIndex += 1;
		}
		if(lastIndex % 2 !==0){
    		lastIndex -= 1;
			value = this.GetValue(this.tree[lastIndex],value);
		}
		firstIndex = parseInt(firstIndex /2);
		lastIndex = parseInt(lastIndex /2);
	}
	return value;
}


var newArray = new segmentTree([1,6,7,4,5])
console.log(newArray.getMinimum(1,5));