/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    // nombre: string;
    // direccion: string;

    constructor(
        public nombre: string,
        public direccion: string

    ) { }

}


class Heroe extends PersonaNormal {
   // alterEgo: string;
    //edad: number;
     //nombreReal: string;

    constructor(
        public alterEgo : string,
        public edad: number,
        public nombreReal: string
         
    ){
        super(nombreReal, 'New York');
    }
} 

const iroman = new Heroe('Iroman', 45, 'Tony');

console.log(iroman)