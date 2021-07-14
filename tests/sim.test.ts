const SimHok = require("./../dist/index");

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

test("uppercase string", () => {
  expect(sim.upper(user)).toBe("SEBASTIAN");
});

test("lowercase string", () => {
  expect(sim.lower(user)).toBe("sebastian");
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

test("adjust zeros", () => {
  let james_bond = 7;
  expect(sim.zfill(james_bond, 2)).toBe("007");
});

test("console.log", () => {
  expect(sim.log("aaa")).toBe(undefined);
});

test("Compare two string and ignore case", () => {
  expect(sim.compareIgnoreCase("Rahul", "rahul")).toBe(true);
});


test("Count number of elements",()=>{
  expect(sim.count([1,2,3,1,3,1],1)).toBe(3);
})