const colorsUtil = require("../public/colorsUtil.js");

describe("colorsUtil (front-end helpers)", () => {
	test("trimColorName removes surrounding whitespace", () => {
		expect(colorsUtil.trimColorName("  red  ")).toBe("red");
	});

	test("isValidColorName accepts non-empty names within default max length", () => {
		expect(colorsUtil.isValidColorName("blue")).toBe(true);
	});

	test("isValidColorName rejects empty or whitespace-only input", () => {
		expect(colorsUtil.isValidColorName("")).toBe(false);
		expect(colorsUtil.isValidColorName("   ")).toBe(false);
	});

	test("isValidColorName enforces maxLength", () => {
		const long = "a".repeat(40);
		expect(colorsUtil.isValidColorName(long, { maxLength: 32 })).toBe(false);
	});
});
