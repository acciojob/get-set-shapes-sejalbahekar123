class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get width()
	{
		return this._width;
	}
	get height()
	{
		return this._height;
	}
	getArea()
	{
		return this._width*this._height;
	}
}

class Square extends Rectangle {
	constructor(side)
	{
		super(side,side);
	}
	getPerimeter()
	{
		return 4 * this._width;
	}
	
}
//complete this code
// class Rectangle {
// Constructor(width,height){ if (width <= 0 || height <= 0) {
//       throw new Error("Width and Height must be positive integers");
//     }
// 	this._width = width;
// 	this._height = height;
// }
//  get width(){
// return this._width;
	
// }

// get height(){
// 	return this._height;
// }
// getArea(){
// 	return this._width * this._height;
// }}

// class Square extends Rectangle {
// Constructor(side){
// if (side <= 0) {
//       throw new Error("Side must be a positive integer");
//     }
//   // Call parent constructor
//     super(side, side);
// }

// getPerimeter(){
//   return this._width * 4;
// }

// }
// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.width);      // 5
// console.log(rectangle.height);     // 10
// console.log(rectangle.getArea());  // 50

// const square = new Square(7);
// console.log(square.width);         // 7
// console.log(square.height);        // 7
// console.log(square.getArea());     // 49
// console.log(square.getPerimeter()); // 28




// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
