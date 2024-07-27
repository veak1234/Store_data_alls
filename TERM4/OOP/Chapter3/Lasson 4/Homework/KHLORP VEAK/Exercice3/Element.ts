class DomElement {
    private tagName: string;
    private parent: Element | string;

    constructor(tagName: string) {
        this.tagName = tagName;
        this.parent = ''; // Initialize parent as empty string, you can adjust this according to your needs
    }

    public getTagName(): string {
        return this.tagName;
    }

    public setParent(parent: Element | string): void {
        this.parent = parent;
    }

    public getParent(): Element | string {
        return this.parent;
    }
}

let domElement = new DomElement('name');
let parentElement = new DomElement('parentName');
domElement.setParent(parentElement);

console.log(domElement.getTagName()); // Outputs: 'name'
console.log(domElement.getParent()); // Outputs: parentElement object or string depending on what you set
