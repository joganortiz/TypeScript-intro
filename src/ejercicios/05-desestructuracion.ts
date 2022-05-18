/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volume: number;
    second: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const reproductor: Reproductor = {
    volume: 90,
    second: 50,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2020
    }
}

const {volume, second, song, details} = reproductor;
const {author} = details

// console.log("El volumen actual es de: ", volume)
// console.log("El segundo actual es de: ", second)
// console.log("La cancion actual es de: ", song)
// console.log("El autor es: ", author)


const dbz: string[] = ["Goku", 'Vegeta', "Trunks"]
const [p1, p2, p3] = dbz;

console.log("Personaje 1", p1)
console.log("Personaje 2", p2)
console.log("Personaje 3", p3)


