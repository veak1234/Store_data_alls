/*
 INSTRUCTIONS

	We want to manage customer food orders in a restaurant:

  - An Order has:
			- the customer name (string)
			- the date of the order (string)
			- the list of food orders (array of FoodOrder)


  - An FoodOrder has:
			- the food name (string)
			- the price (number)

	Q1 : Create the 2 types.

	Q2 : Create the following order :
				- customer = "HIM THE CRAZY"
				- date = "SEP 9"
				- food orders:
						- food : "french fries", price : 12
						- food  : "cambodian fries", price : 1
						- food : "ice scream", price : 4

	Q3 : Create a function that take as parameter a Order, and return the total price of the order
						getTotalPrice(order : Order) : number
*/

// ======= Types =======
// Order type
type Order = {
  customer: string;
  order_date: string;
  orders: FoodOrder[];
};

// Food
type FoodOrder = {
  food: string;
  price: number;
};

// ========== Foods for order ===============
let frenchFood: FoodOrder = { food: "Chesse", price: 12 };
let khmerFood: FoodOrder = { food: "Kor Ko", price: 20 };
let indiaFood: FoodOrder = { food: "Nom Bap", price: 30 };

// ============ Each Order ==============
let salOrder: Order = {
  customer: "Visal",
  order_date: "SEP 9",
  orders: [frenchFood, khmerFood, indiaFood],
};
let radyOrder: Order = {
  customer: "Rady",
  order_date: "JAN 20",
  orders: [frenchFood, khmerFood, indiaFood],
};
let ronanOrder: Order = {
  customer: "Ronan",
  order_date: "FEB 31",
  orders: [frenchFood, khmerFood, indiaFood, indiaFood],
};

// ============ List of order ==============
let allOrders: Order[] = [salOrder, radyOrder, ronanOrder];

// ========== Function =======================
// Function Total Price
let getTotalPrice = (orders: Order): number => {
  let totalPrice: number = 0;
  orders.orders.forEach((order) => {
    totalPrice += order.price;
  });
  return totalPrice;
};
// console.log(getTotalPrice(salOrder));

// Function the most expensive order
let expensiveOrder = (orderList: Order[]): Order => {
  let theMostExpensiveOrder: Order = orderList[0];
  let totalPrice: number = 0;
  let totalPriceEachOrder: number = 0;
  orderList.forEach((orders) => {
    orders.orders.forEach((order) => {
      totalPriceEachOrder += order.price;
    });
    if (totalPriceEachOrder > totalPrice) {
      theMostExpensiveOrder = orders;
      totalPrice = totalPriceEachOrder;
    }
    totalPriceEachOrder = 0;
  });
  return theMostExpensiveOrder;
};
console.log(expensiveOrder(allOrders));
