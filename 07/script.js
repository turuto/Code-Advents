function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    let found = false;
    for (const place in store) {
        console.log('looking for', product, 'in ', store[place], '=>', typeof (store[place]));
        if (typeof (store[place]) === 'object') {
            console.log('should look in', store[place]);
            found = contains(store[place], product);
        } else {
            console.log('checking', product, ' is ', store[place]);
            if (store[place] === product) {
                console.log('FOUND');
                found = true;
                return found;
                break;
            }
        }
    }
    console.log('found is', found);
    return found
}
const almacen = {
    'cajon0': 'kk',
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}

console.log(contains(almacen, 'camiseta')); // true

const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}

// console.log(contains(otroAlmacen, 'gameboy')); // false