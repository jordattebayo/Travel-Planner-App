import { logTrip } from "../client/index.js";

describe("logTrip should be a function", () => {
  test("Show true", () => {
    expect(typeof logTrip).toBe("function");
  });
});
