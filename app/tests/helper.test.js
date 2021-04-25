import { formatPrice, filterCards } from "../utils/helper.js";

describe("formatPrice", () => {
  it("should provide the correct result when passed without the withCents argument", () => {
    expect(formatPrice("123456")).toEqual("123,456");
  });
  it("should correctly coerce numbers to strings when passed as initial argument", () => {
    expect(formatPrice(123456)).toEqual("123,456");
  });
  it("should correctly handle cents when passed true as second argument", () => {
    expect(formatPrice("123456.80", true)).toEqual("123,456.80");
  });
});

describe("filterCards", () => {
  const testArray = [
    { name: "Bitcoin" },
    { name: "BiTCOIn" },
    { name: "BitcoinGold" },
    { name: "XRP" },
    { name: "Dogecoin" },
    { name: "Ethereum" },
  ];
  it("should return an array", () => {
    expect(Array.isArray(filterCards(testArray, "bit"))).toBeTruthy();
  });
  it("should filter in a case insensitive manner", () => {
    expect(filterCards(testArray, "bitcoin").length).toBe(3);
  });
  it("should return empty when no matches", () => {
    expect(filterCards(testArray, "hdgdg")).toEqual([]);
  });
});
