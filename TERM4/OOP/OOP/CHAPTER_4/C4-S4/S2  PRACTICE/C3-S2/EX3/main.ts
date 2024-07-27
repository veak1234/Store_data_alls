
class DomElement {
    private name: string;
    private parent?: DomElement;
    private children : DomElement[]=[];

    constructor(name: string){
        this.name = name;
    }

    public getName():string{
        return this.name;
    }
    public isRoot():boolean{
        return this.parent == undefined;
    }
    public addChild(...childElements:DomElement[]):void{
        for(let child of childElements){
            this.children.push(child);
        }
    }
    public setParent(parent:DomElement):void{
      this.parent = parent;
    }
}

// Create new objects 
let html = new DomElement("html");
let head = new DomElement("head");
let body = new DomElement("body");
let title = new DomElement("title");
let a = new DomElement("a");
let h1 = new DomElement("h1");


html.addChild(head, body);

// Add child and setparent to head 
head.addChild(title);
head.setParent(html)

// Add child and setparent to body 
body.addChild(a,h1);
body.setParent(html);

// Setparent to a, h1, title
a.setParent(body);
h1.setParent(body);
title.setParent(head);

console.log(html.isRoot());
console.log(body.isRoot());
