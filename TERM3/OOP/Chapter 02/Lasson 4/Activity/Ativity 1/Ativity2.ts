
class Houses {
    numberDoor: number;
    owner: string;
    tree: Tree[] = [];

    constructor(numberDoor: number, owner: string){
        this.numberDoor = numberDoor;
        this.owner = owner;
    };
    
    // set of tree push injon in houses
    setTree(Tree: Tree) {
        this.tree.push(Tree);
    };
};

class Tree{
    size: number;
    constructor(size: number){
        this.size = size;
    };
};

let tree1 = new Tree(10); // manage of tree
let tree2 = new Tree(30);
let tree3 = new Tree(40);

let home = new Houses(1, "veak"); // manag of houses
home.setTree(tree1); // push to huses
home.setTree(tree2);
home.setTree(tree3);

console.log(home) // console log on houses and tree