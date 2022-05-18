/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ["jogan", "ortiz", "muñoz"]

interface Personaje {
    name: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    name: "jogan",
    hp: 100,
    habilidades: ['jogan', 'ortiz']
}

personaje.puebloNatal = "pueblo natal";

console.table(personaje)