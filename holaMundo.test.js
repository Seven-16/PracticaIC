// holaMundo.test.js

const saludar = require('./holaMundo');

test('debería retornar "Hola Mundo"', () => {
    expect(saludar()).toBe("Hola Mundo");
});