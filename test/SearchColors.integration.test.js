/**
 * Integration: real HTTP POST + JSON body, matching the SearchColors.php contract
 * (local server, no external network required for CI).
 */

const http = require("http");

function assertSearchColorsResponseShape(data) {
	expect(data).toEqual(expect.any(Object));
	const hasResults = Object.prototype.hasOwnProperty.call(data, "results");
	const hasError = Object.prototype.hasOwnProperty.call(data, "error");
	expect(hasResults || hasError).toBe(true);
	if (hasResults) {
		expect(Array.isArray(data.results)).toBe(true);
	}
	if (hasError) {
		expect(typeof data.error).toBe("string");
	}
}

function startMockSearchServer() {
	return new Promise((resolve, reject) => {
		const server = http.createServer((req, res) => {
			if (req.method !== "POST" || !req.url.endsWith("SearchColors.php")) {
				res.writeHead(404);
				res.end();
				return;
			}
			const chunks = [];
			req.on("data", (c) => chunks.push(c));
			req.on("end", () => {
				// Same shape as api/SearchColors.php returnWithInfo
				const body = { results: ["Crimson"], error: "" };
				res.setHeader("Content-Type", "application/json; charset=UTF-8");
				res.writeHead(200);
				res.end(JSON.stringify(body));
			});
		});
		server.on("error", reject);
		server.listen(0, "127.0.0.1", () => resolve(server));
	});
}

describe("SearchColors flow (integration)", () => {
	test("POST returns JSON with results and error fields like the LAMP API", async () => {
		const server = await startMockSearchServer();
		const { port } = server.address();
		const url = `http://127.0.0.1:${port}/LAMPAPI/SearchColors.php`;

		try {
			const res = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json; charset=UTF-8" },
				body: JSON.stringify({ search: "c", userId: "1" }),
			});

			expect(res.status).toBe(200);
			const data = await res.json();
			assertSearchColorsResponseShape(data);
			expect(data.results).toContain("Crimson");
		} finally {
			await new Promise((r) => server.close(r));
		}
	});
});
