import {
  len,
  capitalize,
  capitalizeAll,
  upper,
  lower,
  startswith,
  endswith,
  split,
  zfill,
  log,
  compareIgnoreCase,
} from "@src/index";

const user = "sebastian";
const users = ["sebastian", "klaudia"];

test("count string length", () => {
  expect(len(user)).toBe(9);
});

test("count array length", () => {
  expect(len(users)).toBe(2);
});

test("capitalize string", () => {
  expect(capitalize(user)).toBe("Sebastian");
});

test.each([
  ["sebastian", "Sebastian"],
  ["upper case", "Upper Case"],
])('should capitalize "%s" to "%s"', (input, expected) => {
  expect(capitalizeAll(input)).toBe(expected);
});

test("uppercase string", () => {
  expect(upper(user)).toBe("SEBASTIAN");
});

test("lowercase string", () => {
  expect(lower(user)).toBe("sebastian");
});

test("is started with lower letter", () => {
  expect(startswith(user, "s")).toBe(true);
});

test("is started with upper letter", () => {
  expect(startswith(user, "S")).toBe(false);
});

test("is ended with lower letter", () => {
  expect(endswith(user, "n")).toBe(true);
});

test("get first letter", () => {
  expect(split(user, [0])).toBe("s");
});

test("get two first letter", () => {
  expect(split(user, [0, 2])).toBe("se");
});

test("remove 3 first letter", () => {
  expect(split(user, [3, 0])).toBe("astian");
});

test("get latest 3 letter", () => {
  expect(split(user, [0, -3])).toBe("ian");
});

test("adjust zeros", () => {
  let james_bond = 7;

  expect(zfill(james_bond, 2)).toBe("007");
});

test("should call console.log with message", () => {
  const spy = jest.spyOn(console, "log").mockImplementation();
  const message = "This is pretty awesome 🎉";

  log(message);

  expect(spy).toHaveBeenCalledWith(message);
});

test("Compare two string and ignore case", () => {
  expect(compareIgnoreCase("Rahul", "rahul")).toBe(true);
});
