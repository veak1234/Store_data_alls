//
// USE CASE :
//    - Tree can  MOST OF THE TIME green, so we dont want the user to set the color all the time
//    - We want only sometime to set the tree color
//  TODO
//    - Complete this class with the right constructor and setters method to full fill withh the sue case requirements

export class Tree {
  color: string = "green";

  constructor() {}

  addColor(color:string):void{
    this.color = color;
  }
}

// Example
let newTree = new Tree();
newTree.addColor("red");

console.log(newTree);
