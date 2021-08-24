const Convert = require("../src/js/Convert")

const convert = new Convert();
test("convert celcius to cel", () => {
    expect(convert.fromCelcius("rea", 20)).toBe(16)
});
test("convert celcius to far", () => {
    expect(convert.fromCelcius("far", 20)).toBe(68)
});
test("convert celcius to cel", () => {
    expect(convert.fromCelcius("cel", 20)).toBe(20)
});