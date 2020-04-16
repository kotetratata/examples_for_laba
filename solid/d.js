class someResourse {
	constructor(){
		this.first;
		this.second;
		this.third;
	}
}

interface ISomeResourse {
	first: someType,
	second: someMayBeOtherType,
	third: evenMoreOtherType,
}

class someClass {
	constructor(public usefulResourse: ISomeResourse) { }
	someMethod(){
		//do smth with this.usefulResourse;
	}
}


///////////instead of 

class someResourse {
	constructor(){
		this.first;
		this.second;
		this.third;
	}
}

class someClass {
	constructor(public usefulResourse: someResourse) { }
	someMethod(){
		//do smth with this.usefulResourse;
	}
}