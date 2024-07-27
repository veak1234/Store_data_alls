import { Tree } from "./Tree";

export class House {
  numberDoor: number;
  owner: string;
  trees: Tree[]=[]
 
  constructor(numberDoor: number, owner: string) {
    this.numberDoor = numberDoor;
    this.owner = owner;
  }

  addTree(tree: Tree):void{
    this.trees.push(tree);
  }
}

