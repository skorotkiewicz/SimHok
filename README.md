# Sim Hok

![licence badge](https://img.shields.io/npm/l/simhok?style=flat)
![last commit badge](https://img.shields.io/github/last-commit/skorotkiewicz/SimHok/main?style=flat)
![downloads badge](https://img.shields.io/npm/dm/simhok?style=flat)

A lightweight and easy-to-use library for features you probably use every day.

## Install

```sh
$ npm install simhok

# or

$ yarn add simhok
```

## Import

```javascript
const SimHok = require("simhok");
const sim = new SimHok();
```

## Usage

```javascript
const user = "sebastian";
const users = ["sebastian", "klaudia"];
const hello = "hello world";

sim.len(user); // number: 9
sim.len(users); // number: 2
sim.capitalize(hello); // string: Hello world
sim.capitalizeAll(hello); // string: Hello World
sim.upper(user); // string: SEBASTIAN
sim.lower(user); // string: sebastian

sim.startswith(user, "s"); // boolean: true
sim.startswith(user, "S"); // boolean: false
sim.endswith(user, "n"); // boolean: true

sim.rstrip(user, "an"); // string: sebasti
sim.lstrip(user, "s"); // string: ebastian

sim.split(user, [0]); // string: s
sim.split(user, [0, 2]); // string: se
sim.split(user, [3, 0]); // string: astian
sim.split(user, [0, -3]); // string: ian

let james_bond = 7;
sim.zfill(james_bond, 2); // string: 007

sim.compareIgnoreCase("Sebastian", "sebastian"); // boolean: true

sim.log("This is pretty awesome 🎉"); // "This is pretty awesome 🎉"
```
