"use strict";
//
// USE CASE :
//    - Tree can be any color and the color of the tree is mandatory
//
//  TODO
//    - Complete this class with the right constructor and setters method to full fill withh the sue case requirements
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
class Tree {
    constructor(color) {
        this.color = color;
    }
}
exports.Tree = Tree;
let newTree = new Tree("yellow");
console.log(newTree);
