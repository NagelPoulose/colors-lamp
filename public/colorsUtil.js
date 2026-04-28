/**
 * Pure helpers for color name input (used by the COLORS app and by unit tests).
 */
function trimColorName(name) {
	if (name == null || typeof name !== "string") {
		return "";
	}
	return name.trim();
}

/**
 * @param {string} name
 * @param {{ maxLength?: number }} [opts]
 * @returns {boolean}
 */
function isValidColorName(name, opts) {
	const maxLength = opts && typeof opts.maxLength === "number" ? opts.maxLength : 32;
	const s = trimColorName(name);
	return s.length > 0 && s.length <= maxLength;
}

var colorsUtil = {
	trimColorName: trimColorName,
	isValidColorName: isValidColorName,
};

if (typeof module !== "undefined" && module.exports) {
	module.exports = colorsUtil;
}
if (typeof window !== "undefined") {
	window.colorsUtil = colorsUtil;
}
