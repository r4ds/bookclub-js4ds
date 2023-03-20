// Guide for using import with Node.js
// https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/

import { clip } from "./utilities.js";

const data = [-1, 5, 3, 0, 10];

console.log(`clip(${data}) -> ${clip(data)}`);
console.log(`clip(${data}, 5) -> ${clip(data, 5)}`);