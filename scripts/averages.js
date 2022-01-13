const convertList = (list) => {
   const listArray = list.split(",");
   
   listNumbers = listArray.map(
   function(element){
      newList =   Number(element) 
      return newList;
   })
   return listNumbers;
}

// Arithmetic mean
const arithmeticMean = (list) => {
   const listAddition = list.reduce(
      function ( accumulatedValue = 0, newElement ) {
         return accumulatedValue + newElement;
      }
   );
   const averageList = listAddition / list.length;
   return averageList;
}

const calculateArithmeticMean = () => {
   const list = document.getElementById("inputNumbers").value;
   const newList = convertList(list);

   const arithmeticMeanResult = arithmeticMean(newList);
   
   document.getElementById("Answer").value = arithmeticMeanResult;
}

// Median
const median = (list) => {

   const OrderedList = list.sort(function orderedArray(a,b){
      return a-b;
   });

   const halfList = parseInt(OrderedList.length / 2);

   if ( OrderedList.length % 2 === 0 ){
      const element1 = OrderedList[halfList - 1];
      const element2 = OrderedList[halfList];

      const averageMedian = arithmeticMean([element1,element2]);

      const median = averageMedian;

      return median;
   } else {
      const median = OrderedList[halfList];

      return median;
   }
}

const calculateMedian = () => {
   const list = document.getElementById("inputNumbers").value;
   const newList = convertList(list);

   const medianResult = median(newList);
   
   document.getElementById("Answer").value = medianResult;
}

// Mode
const mode = (list) => {
   const countList = {};

   list .map(
      function (element) {
         if (countList[element]) {
            countList[element] += 1;
         } else {
            countList[element] = 1;
         }
      }
   );

   const listArray = Object.entries(countList).sort(
      function (a,b) {
         return a[1]-b[1];
      }
   );
   
   const mode = listArray[listArray.length - 1];

   const modeSeparated = `El ${mode[0]} se repite ${mode[1]} veces`;
   
   return modeSeparated;
}

const calculateMode = () => {
   const list = document.getElementById("inputNumbers").value;
   const newList = convertList(list);

   const modeResult = mode(newList);
   
   document.getElementById("Answer").value = modeResult;
}

// Harmonic mean
const harmonicMean = (list) => {
   const reversedSpeed = (
      list .map(
         function (speed) {
            return (1/speed);
         }
      )
   );

   const accumulatedSpeed = reversedSpeed.reduce((a,b) => a+b);
   const harmonicMean = (list.length / accumulatedSpeed).toFixed(3);

   return harmonicMean;
}

const calculateHarmonicMean = () => {
   const list = document.getElementById("inputNumbers").value;
   const newList = convertList(list);

   const modeResult = harmonicMean(newList);
   
   document.getElementById("Answer").value = modeResult;
}