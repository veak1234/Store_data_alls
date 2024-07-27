//
// USE CASE :
//    - Tree can be any color and the color of the tree is mandatory
//
//  TODO
//    - Complete this class with the right constructor and setters method to full fill withh the sue case requirements

export class Tree {
  color: string;

  constructor(color:string) {
    this.color= color;
  }
}

let newTree = new Tree("yellow");
console.log(newTree)