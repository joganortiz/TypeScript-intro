/*
    ===== Código de TypeScript =====
*/

import { calculaIVA, Productos } from "./06-desestructuracion-funcion";

const carritoCampras: Productos[] = [
    {
        desc: "Telefono 1",
        price: 100
    },
    {
        desc: "Telefono 2",
        price: 150
    }
];

const [total, isv] = calculaIVA(carritoCampras);


console.log("Total:", total)
console.log("ISV:", isv)