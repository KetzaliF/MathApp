// FORMULAS

// Square
const squarePerimeter = (side) =>{
   const perimeter = side * 4;
   return( perimeter + " cm");
}

const squareArea = (side) =>{
   const area = side * side;
   return(area + " cm²");
}

// Circle
const pi = Math.PI;

const circlePerimeter = (radio) =>{
    const diameter = radio * 2;
    const perimeter = diameter * pi;
   return( perimeter.toFixed(2) + " cm");
}

const circleArea = (radio) =>{
    const area = (radio * radio) * pi;
   return(area.toFixed(2) + " cm²");
}

// Triangle
const trianglePerimeter = (side1, side2, base) =>{
   const perimeter = side1 + side2 + base; 
   return( perimeter + " cm");
}

const triangleArea = (base, height) =>{
   const area = (base * height) / 2; 
   return(area + " cm²");
}

// Rectangle
const rectanglePerimeter = (base, height) =>{
   const perimeter = (base * 2) + (height * 2) 
   return( perimeter + " cm");
}

const rectangleArea = (base, height) =>{
   const area = (base * height); 
   return(area + " cm²");
}

// INTERACCIÓN CON HTML

// Square
const calculateSquarePerimeter = () =>{
   const input = document.getElementById("inputSquare");
   const value = parseFloat(input.value);
   const answer = document.getElementById("answerSquare");

   const perimeter = squarePerimeter(value)
   answer.value = perimeter;
}

const calculateSquareArea = () =>{
   const input = document.getElementById("inputSquare");
   const value = parseFloat(input.value);

   const area = squareArea(value);
   document.getElementById("answerSquare").value = area;
}

// Circle
const calculateCirclePerimeter = () =>{
   const input = document.getElementById("inputCircle");
   const value = parseFloat(input.value);

   const perimeter = circlePerimeter(value);
   document.getElementById("answerCircle").value = perimeter;
}

const calculateCircleArea = () =>{
   const input = document.getElementById("inputCircle");
   const value = parseFloat(input.value);

   const area = circleArea(value);
   document.getElementById("answerCircle").value = area;
}

// Triangle
const calculateTrianglePerimeter = () =>{
   const sideA = document.getElementById("inputSideA");
   const sideB = document.getElementById("inputSideB");
   const base = document.getElementById("inputBase");
   const value1 = parseFloat(sideA.value);
   const value2 = parseFloat(sideB.value);
   const value3 = parseFloat(base.value);

   const perimeter = trianglePerimeter(value1, value2, value3);
   document.getElementById("answerTriangle").value = perimeter;
}

const calculateTriangleArea = () =>{
   const base = document.getElementById("inputBase");
   const height = document.getElementById("inputHeight");
   const value3 = parseFloat(base.value);
   const value4 = parseFloat(height.value);

   const area = triangleArea(value3, value4);
   document.getElementById("answerTriangle").value = area;
}

// Rectangle
const calculateRectanglePerimeter = () =>{
   const base = document.querySelector(".inputBase");
   const height = document.querySelector(".inputHeight");
   const value1 = parseFloat(base.value);
   const value2 = parseFloat(height.value);

   const perimeter = rectanglePerimeter(value1, value2);
   document.getElementById("answerRectangle").value = perimeter;
}

const calculateRectangleArea = () =>{
   const base = document.querySelector(".inputBase");
   const height = document.querySelector(".inputHeight");
   const value1 = parseFloat(base.value);
   const value2 = parseFloat(height.value);

   const area = rectangleArea(value1, value2);
   document.getElementById("answerRectangle").value = area;
}