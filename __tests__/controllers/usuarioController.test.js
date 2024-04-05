/* eslint-disable no-undef */
function sum(a, b) {
	return a + b;
}

describe("Initial tests", () => {
	it("Firts init test", () => {
		const firstArgument = 8;
		const secondASrgument = 7;

		const result = sum(firstArgument, secondASrgument);

		expect(result).toEqual(firstArgument + secondASrgument);
	});
});
