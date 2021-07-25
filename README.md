# SimHok

![licence badge](https://img.shields.io/npm/l/simhok?style=flat)
![last commit badge](https://img.shields.io/github/last-commit/skorotkiewicz/SimHok/main?style=flat)
![downloads badge](https://img.shields.io/npm/dm/simhok?style=flat)
![npm version badge](https://img.shields.io/npm/v/simhok?style=flat)
![size badge](https://img.shields.io/bundlephobia/min/simhok?style=flat)

A lightweight and easy-to-use library for features you probably use every day.

Check the [documentation](https://skorotkiewicz.github.io/SimHok/) to see all available functions.

## Install

```sh
$ npm install simhok
// or
$ yarn add simhok
```

## Import

```javascript
// Import what you need
import { len, log } from "simhok";

// Import all functions
import * as Sim from "simhok";

// In node.js
const { len, log } = require("simhok");
```

## Available functions

```javascript
const user = "sebastian";
const users = ["sebastian", "klaudia"];
const hello = "hello world";

len(user);             // number:9
len(users);            // number: 2
capitalize(hello);     // string: Hello world
capitalizeAll(hello);  // string: Hello World
upper(user);           // string: SEBASTIAN
lower(user);           // string: sebastian

startsWith(user, "s"); // boolean: true
startsWith(user, "S"); // boolean: false
endsWith(user, "n");   // boolean: true

rstrip(user, "an");    // string: sebasti
lstrip(user, "s");     // string: ebastian

split(user, [0]);      // string: s
split(user, [0, 2]);   // string: se
split(user, [3, 0]);   // string: astian
split(user, [0, -3]);  // string: ian

// start from 4 character and get 3 next characters
mid("Roland Watson", 4, 3) // string: and

let james_bond = 7;
zfill(james_bond, 2);  // string: 007

count([1,2,1,3,1], 1); // number: 3
compareIgnoreCase("Sebastian", "sebastian"); // boolean: true

flip(42);              // number: -42
flip(-42);             // number: 42

n("1_000_000")         // number: 1000000
rand(1, 100)           // number: 42

rept(1, 10)            // number: 1111111111
rept("1", 10)          // string: 1111111111

clean("This is   inline   String !"); // string: "This is inline String!"

// or with multi lines:
clean(`Is   this    now , 
multi line  String ?  `, true);       
// string:
`Is this now, 
multi line String?`;

log("This is pretty awesome 🎉"); // "This is pretty awesome 🎉"
```

# Example in React

```javascript
import { len, upper } from "simhok";

const App = () => {
  let name = upper("Sebastian");
  let users = len(["Sebastian", "Klaudia"]);

  return <div>{users > 0 && name}</div>;
};
```

```javascript
import * as Sim from "simhok";

const App = () => {
  let name = Sim.upper("Sebastian");
  let users = Sim.len(["Sebastian", "Klaudia"]);

  return <div>{users > 0 && name}</div>;
};
```
