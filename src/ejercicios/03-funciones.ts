/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

interface PersonajeLOR {
    name: string;
    pv: number;
    mostrarHP: () => void;
}


function currar(personaje: PersonajeLOR, currarX: number): void {
    personaje.pv += currarX;

    console.log(personaje);
}

const newpersonaje: PersonajeLOR = {
    name: "Jogan",
    pv: 50,
    mostrarHP(){
        console.log('puntos de vida', this.pv)
    }
}

currar(newpersonaje, 50)

newpersonaje.mostrarHP();