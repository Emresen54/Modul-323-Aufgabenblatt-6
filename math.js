function addieren(a, b) {
    return a + b;
}

function subtrahieren(a, b) {
    return a - b;
}

function multiplizieren(a, b) {
    return a * b;
}
function dividieren(a, b) {
    return a % b;
}

module.exports = {addieren, subtrahieren, multiplizieren, dividieren};

const { addieren, subtrahieren, multiplizieren, dividieren } = require('./math');


