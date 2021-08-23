const { Temperatur } = require("../src/js/Convert")

const temperatur = new Temperatur();
test("fromCelcius 4 / 5 * 32 equal 25.6", () => {
    expect(temperatur.fromCelcius(4/5*32)).toBe(25.6);
}) 