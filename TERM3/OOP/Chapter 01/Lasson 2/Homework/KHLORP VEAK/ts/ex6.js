// Instructions:
// • Add type annotations (as explicit as possible)
// • Fix errors (if applicable)
var item1 = { name: "computer", quantity: 4 };
var item2 = { name: "chair" }; // => Making quantity optional with "?"
function getItemInfo(item) {
    if (item.quantity !== undefined) {
        return item.quantity + " " + item.name;
    }
    else {
        return "Unknown quantity " + item.name;
    }
}
console.log(getItemInfo(item1));
// => This instruction should now raise an error due to incompatible type
console.log(getItemInfo(item2));
