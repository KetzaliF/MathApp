const peopleTable = [];

const addPeople = () => {
   const name = document.getElementById("namePeople").value;
   const salary = document.getElementById("salaryPeople").value;

   const row = "<tr><td>" + name + "</td><td>" + salary + "</td></tr>";
   const trElement = document.createElement("TR");
   trElement.innerHTML = row;

   document.getElementById("tbody").appendChild(trElement);

   const salaryInt = parseFloat(salary);

   peopleTable.push({
      name: name,
      salary: salaryInt,
   });
}

// Helpers
const calcularMediaArtimetica = ( lista ) => {
   const sumaLista = lista.reduce(
      function ( valorAcumulado = 0, nuevoElemento ) {
         return valorAcumulado + nuevoElemento;
      }
   );
const promedioLista = sumaLista / lista.length;
return promedioLista;
}

const esPar = (numero) => {
   return (numero % 2 === 0);
}

//Calculadora de mediana
const medianaSalarios = (lista) => {
   const mitad = parseInt(lista.length / 2);

   if (esPar(lista.length)) {
      const elemento1 = lista[mitad - 1];
      const elemento2 = lista[mitad];

      const mediana = calcularMediaArtimetica([elemento1,elemento2]);

      return mediana;
   } else {
      mediana = lista[mitad];

      return mediana;
   }
}

const getMedian = () => {
   const salariosMx = peopleTable.map(
      function (personas) {
         return personas.salary;
      }
   );

   const salariosMxSorted = salariosMx.sort(
      function(salaryA, salaryB) {
         return salaryA - salaryB;
      }
   );

   const medianaGeneralMx = medianaSalarios(salariosMxSorted);
   
   // Top 10
   const sliceStart = (salariosMxSorted.length * 90) / 100;

   const salariosMxTop10 =  salariosMxSorted.slice(
      sliceStart,
      salariosMxSorted.length,
   );

   const medianaTop10Mx = medianaSalarios(salariosMxTop10);

   document.getElementById("generalMedian").value = medianaGeneralMx;
   document.getElementById("top10Median").value = medianaTop10Mx;
}