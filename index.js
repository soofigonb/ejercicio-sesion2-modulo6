(async () => {
    const { nanoid } = await import('nanoid'); // Importar nanoid dinámicamente
    const { concatenateOrLength } = require('./utils'); // Importar la función

    // Generar dos IDs diferentes
    const id1 = nanoid();
    const id2 = nanoid();

    // Usar la función con los IDs generados
    const result = concatenateOrLength(id1, id2);

    // Imprimir el resultado
    console.log('ID 1:', id1);
    console.log('ID 2:', id2);
    console.log('Resultado:', result);
})();
