const { returnLength } = require('./config'); 

/**
 * Función que devuelve la concatenación de dos cadenas de texto o el largo de la concatenación.
 * @param {string} str1 - La primera cadena de texto.
 * @param {string} str2 - La segunda cadena de texto.
 * @returns {string|number} - La concatenación o el largo de la concatenación.
 */
function concatenateOrLength(str1, str2) {
    const concatenatedString = str1 + str2;

    // Usa la variable booleana importada para decidir qué retornar
    if (returnLength) {
        return concatenatedString.length; // Devuelve el largo de la concatenación
    } else {
        return concatenatedString; // Devuelve la concatenación
    }
}

// Exportar la función para uso externo
module.exports = { concatenateOrLength };