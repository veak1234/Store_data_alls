import { House } from "./House";
import { Tree } from "./Tree";

// Create the house
let houseRonan = new House(1, "Ronan")

// Create the tree
let tree1 = new Tree(10)
let tree2 = new Tree(3)

// Add the 2 tress to my house
houseRonan.trees.push(tree1, tree2);   // without function

houseRonan.addTree(tree1);
houseRonan.addTree(tree2);         // With fucntion

console.log(houseRonan);


