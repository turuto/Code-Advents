function contarOvejas(ovejas) {
    // aquí tu magia
    const filteredSheeps = ovejas.filter(oveja => {
        const isRed = oveja.color === 'rojo';
        const hasN = oveja.name.toLowerCase().indexOf('n') >= 0;
        const hasA = oveja.name.toLowerCase().indexOf('a') >= 0;

        if (isRed && hasN && hasA) {
            return oveja;
        }
    });

    return filteredSheeps;
}