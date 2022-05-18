/*
    ===== Código de TypeScript =====
*/
export interface Productos {
    desc: string;
    price: number;
}


const telefono: Productos = {
    desc: 'Nokia',
    price: 150
}

const tableta: Productos = {
    desc: 'iPad Air',
    price: 350
}

export function calculaIVA( producto: Productos[]): [number, number] {
    let total = 0;

    producto.forEach(({price}) =>{
        total += price;
    })

    return [total, total * 0.19];
}

const articulo = [telefono, tableta]

const [total, isv] = calculaIVA(articulo)

// console.log("Total:", total)
// console.log("ISV:", isv)