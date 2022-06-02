let cantidad: number = Number(prompt("ingrese la dimension:"));
let vector: number[] = new Array(cantidad);

for (let indice = 0; indice < cantidad; indice++) {
  vector[indice] = Number(prompt("Ingrese los numeros:" + indice));
}
console.log("los numeros ingresados y su dimension es:", vector);

let numeNegativos: number = 0;
let numePositivos: number = 0;
let numeCero: number = 0;

for (let indice = 0; indice < cantidad; indice++) {
  if (vector[indice] > 0) {
    numePositivos++;
  } else {
    if (vector[indice] < 0) {
      numeNegativos++;
    } else {
      numeCero++;
    }
  }
}
console.log(
  "Los numero psitivo son:",
  numePositivos,
  "Los numero negativos son:",
  numeNegativos,
  "El numero en 0 son:",
  numeCero
);
