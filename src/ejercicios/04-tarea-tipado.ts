/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    name: string;
    age: number;
    direction: direction
    mostrarDirection: () => string;
}

interface direction {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHeroe = {
    name: "Spiderman",
    age: 30,
    direction: {
        street: "Main St",
        country: "USA",
        city: "NY"
    },

    mostrarDirection() {
        return this.name + ", " + this.direction.city + ", "+this.direction.country;
    }
}


const direction = superHeroe.mostrarDirection();

console.log(direction)


superHeroe.direction.city

