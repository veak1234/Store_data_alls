interface Shape {
  color: string;
  area():number;
}

class Circle implements Shape {
  radius: number=0;
  color:string = 'red';

//   area(): number {
//     return Math.PI * this.radius ** 2;
//   }
}
console.log(new Circle().area());
