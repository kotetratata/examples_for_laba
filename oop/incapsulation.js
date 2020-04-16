function someFunc() {
	var someSecretValue;

	this.getValue = function(){
		return someSecretValue;
	}

	this.setValue = function(newValue){
		someSecretValue = newValue;
	}
}

let a = new someFunc;

a.setValue(12);
a.getValue;
a.someSecretValue;