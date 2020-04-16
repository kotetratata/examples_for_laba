interface Shape{
	area(){
		// return area of this shape
	}
}

interface Rectangle extends Shape{
	area(){
		// return area of rectangle
	}
}

inteface Circle extends Shape{
	area(){
		// return area of circle
	}
}

///////////////////// instead of 

interface Shape{
	rectangleArea(){
		// return area of rectangle
	},
	circleArea(){
		// return area of circle
	}
}