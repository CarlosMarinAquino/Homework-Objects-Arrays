//* 01.- Del siguiente objeto:
/**
 ** 1. Muestra en pantalla el valor de la propiedad name mediante dot notation
 ** 2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
 ** 3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
var student = {
  name: "David Ray",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};
console.log(student.name);
console.log(student["age"]);
student.name = "Steve Jobs";
console.log(student.name);
console.log(student);
/*
 * 02.- Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript. Objeto de muestra:*/
var student2 = {
  name: "David Ray",
  sclass: "VI",
  rollno: 12,
};
let counterProps = 0;
// loop through each key/value
for (let properties in student2) {
  // increase the counterProps
  ++counterProps;
}
//const result = Object.keys(student2).length;
console.log(counterProps);
/*
 *03.- Verifica si la propiedad name se encuentra dentro del siguiente objeto:*/
var student3 = {
  name: "David Ray",
  sclass: "VI",
  rollno: 12,
};
console.log("name" in student3); // true, user.age exists
/*
 *04.-Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. Imprima también el objeto antes o después de eliminar la propiedad. Objeto para usar:*/
var student4 = {
  name: "David Ray",
  sclass: "VI",
  rollno: 12,
};
console.log(student4);
for (let properties in student4) {
  // increase the counterProps
  delete student4.rollno;
}
console.log(student4);
//* 05.- Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
var student5 = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};
for (let key in student5) {
  if (key === "ege") {
    student.ege = 35;
  }
  console.log(student5);
}
/**
 ** Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 */
var student6 = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};

/**
  ** 07 Crea un código para llenar un objecto vacio:
  const objeto = {} Con las siguiente propiedades:
  color
  tamaño
  peso
  cantidad

 */
const obj = {};

if (!Object.keys(obj).length) {
  Object.assign(obj, {
    color: "rojo",
    tamaño: "grande",
    peso: 150,
    cantidad: 15,
  });
}

console.log(obj);
