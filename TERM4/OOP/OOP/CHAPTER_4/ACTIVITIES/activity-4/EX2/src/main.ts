import { Point } from './point';

let p1 = new Point(1, 3);
let p2 = new Point(1, 1);
let p3 = new Point(1, 3);

console.log(p1.isEqual(p2));
console.log(p1.isEqual(p3));

