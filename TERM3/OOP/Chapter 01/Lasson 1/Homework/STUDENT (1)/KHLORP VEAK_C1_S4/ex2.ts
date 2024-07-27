 
//  INSTRUCTIONS

// 	We want to manage customer food orders in a restaurant:

//   - An Order has:
// 			- the customer name (string)
// 			- the date of the order (string)
// 			- the list of food orders (array of FoodOrder)


//   - An FoodOrder has:
// 			- the food name (string)
// 			- the price (number)

// 	Q1 : Create the 2 types.

// 	Q2 : Create the following orders :
// 				- customer = "HIM THE CRAZY"
// 				- date = "SEP 9"
// 				- food orders:
// 						- food : "french fries", price : 12
// 						- food  : "cambodian fries", price : 1
// 						- food : "ice scream", price : 4


// 				- customer = "RONAN THE CRAZY"
// 				- date = "SEP 10"
// 				- food orders:
// 						- food : "coca", price : 12
// 						- food  : "caco", price : 1
// 						- food  : "snake", price : 14
// 						- food  : "chiken", price : 11
						
						
// 	Q3 : Create a function that take as parameter a Order, and return the total price of the order
// 						getTotalPrice(order : Order) : number
						
						
// 	Q4 : Create a function that take as parameter a list of Order, and return which order is the most expensive
  
//            getMostExpensive(orders : Order[]) : Order
	

class FoodOrder {
    constructor(public food: string, public price: number) {}
};
class Order {
    constructor(public customer: string, public date: string, public foodOrders: FoodOrder[]) {}
};

const order1 = new Order(
    "HIM THE CRAZY",
    "SEP 9",
    [
        new FoodOrder("french fries", 12),
        new FoodOrder("cambodian fries", 1),
        new FoodOrder("ice scream", 4),
    ]
);

const order2 = new Order(
    "RONAN THE CRAZY",
    "SEP 10",
    [
        new FoodOrder("coca", 12),
        new FoodOrder("caco", 1),
        new FoodOrder("snake", 14),
        new FoodOrder("chiken", 11),
    ]
);

function getTotalPrice(order: Order): number {
    let totalPrice = 0;
    order.foodOrders.forEach((foodOrder) => {
        totalPrice += foodOrder.price;
    });
    return totalPrice;
};

function getMostExpensive(orders: Order[]): Order {
    let mostExpensiveOrder: Order | undefined;
    let maxPrice = 0;
    
    orders.forEach((order) => {
        const totalPrice = getTotalPrice(order);
        if (totalPrice > maxPrice) {
            maxPrice = totalPrice;
            mostExpensiveOrder = order;
        }
    });
    
    if (mostExpensiveOrder) {
        return mostExpensiveOrder;
    } else {
        throw new Error("No orders provided");
    }
}

console.log("Total price of order 1: ", getTotalPrice(order1));
console.log("Total price of order 2: ", getTotalPrice(order2));

const orders = [order1, order2];
console.log("Most expensive order : ", getMostExpensive(orders));
