import SimHok from "@src/index";

const sim = new SimHok();
const user = "sebastian";
const users = ["sebastian", "klaudia"];

test("count string length", () => {
  expect(sim.len(user)).toBe(9);
});

test("count array length", () => {
  expect(sim.len(users)).toBe(2);
});

test("capitalize string", () => {
  expect(sim.capitalize(user)).toBe("Sebastian");
});

test.each([
  ["sebastian", "Sebastian"],
  ["upper case", "Upper Case"],
])('should capitalize "%s" to "%s"', (input, expected) => {
  expect(sim.capitalizeAll(input)).toBe(expected);
});

test("uppercase string", () => {
  expect(sim.upper(user)).toBe("SEBASTIAN");
});

test("lowercase string", () => {
  expect(sim.lower(user)).toBe("sebastian");
});

test("is started with `se` letters", () => {
  expect(sim.startswith(user, "se")).toBe(true);
});

test("is started with lower letter", () => {
  expect(sim.startswith(user, "s")).toBe(true);
});

test("is started with upper letter", () => {
  expect(sim.startswith(user, "S")).toBe(false);
});

test("is ended with lower letter", () => {
  expect(sim.endswith(user, "n")).toBe(true);
});

test("is ended with `an` letters", () => {
  expect(sim.endswith(user, "an")).toBe(true);
});

test("is ended with `ia` letters", () => {
  expect(sim.endswith(user, "ia")).toBe(false);
});

test("get first letter", () => {
  expect(sim.split(user, [0])).toBe("s");
});

test("get two first letter", () => {
  expect(sim.split(user, [0, 2])).toBe("se");
});

test("remove 3 first letter", () => {
  expect(sim.split(user, [3, 0])).toBe("astian");
});

test("get latest 3 letter", () => {
  expect(sim.split(user, [0, -3])).toBe("ian");
});

test("remove letters from right", () => {
  expect(sim.rstrip(user, "an")).toBe("sebasti");
});

test("remove letters from left", () => {
  expect(sim.lstrip(user, "s")).toBe("ebastian");
});

test("toggle number to negative and postive", () => {
  let num = 42;
  expect(sim.abs(num)).toBe(-42);
  expect(sim.abs(sim.abs(num))).toBe(42);
});

test("adjust zeros", () => {
  let james_bond = 7;

  expect(sim.zfill(james_bond, 2)).toBe("007");
});

test("should call console.log with message", () => {
  const spy = jest.spyOn(console, "log").mockImplementation();
  const message = "This is pretty awesome 🎉";

  sim.log(message);

  expect(spy).toHaveBeenCalledWith(message);
});

test("Compare two string and ignore case", () => {
  expect(sim.compareIgnoreCase("Rahul", "rahul")).toBe(true);
});
