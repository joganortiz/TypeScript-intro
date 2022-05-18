/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero: Pasajero = {
    nombre: "Fernando"
}

const pasajero1: Pasajero = {
    nombre: "Melissa",
    hijos: ['Natalia', "Gabriela"]
}

function imprimirHijos(pasajeros: Pasajero): void {
    const cuantosHijos = pasajeros.hijos?.length || 0;

    console.log(cuantosHijos)
}


imprimirHijos(pasajero)