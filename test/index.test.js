const Convert = require("../src/js/Convert")

const convert = new Convert();
test("convert celcius to reamur", () => {
    expect(convert.fromCelcius(20, 20),toBe(16))
})