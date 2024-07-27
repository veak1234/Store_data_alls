// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)
type item={name?:string, quantity?:number}
let item1:item = { name: "computer", quantity: 4 };
let item2:item = { name: "chair"};

// TODO Replace "any" by the appropriate annotation
// TODO Add annotation for the return type
function getItemInfo(item:item):string {
  return item.quantity + " " + item.name;
}

console.log(getItemInfo(item1));

// After aing the annotion, this instrution should be in error !
console.log(getItemInfo(item2));
