// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)

let item1: { name: string; quantity: number } = { name: "computer", quantity: 4 };
let item2: { name: string; quantity?: number } = { name: "chair" }; // => Making quantity optional with "?"

function getItemInfo(item: { name: string; quantity?: number }): string {
  if (item.quantity !== undefined) {
    return item.quantity + " " + item.name;
  } else {
    return "Unknown quantity " + item.name;
  }
}

console.log(getItemInfo(item1));

// => This instruction should now raise an error due to incompatible type
console.log(getItemInfo(item2));
