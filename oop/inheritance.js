class superMegaClass {
	specialMethod() {
		console.log('i`m special and can we extended');
	}
}

class ordinaryClass extends superMegaClass {

}

let a = new ordinaryClass;

a.specialMethod();