"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var house_1 = require("./house");
// Create object house 
var salHouse = new house_1.House("Sal");
// Add new chair 
salHouse.addChair(1);
salHouse.addChair(2);
console.log(salHouse);
