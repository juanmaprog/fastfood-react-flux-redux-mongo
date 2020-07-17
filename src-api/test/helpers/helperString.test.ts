const getNewGUID = require("../../helpers/helperString");

test("get getNewGUID() to equal not empty", () => {
  expect(getNewGUID()).not.toBe("");
});

test("get getNewGUID() to equal not null", () => {
  expect(getNewGUID()).not.toBeNull();
});

test("get getNewGUID() to equal  defined", () => {
  expect(getNewGUID()).toBeDefined();
});

test("get getNewGUID().length to equal length 36 ", () => {
  const oid = getNewGUID();
  const len = oid.length;
  expect(len).toBe(36);
});
