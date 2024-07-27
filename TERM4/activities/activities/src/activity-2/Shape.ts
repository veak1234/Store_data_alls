class Point {
  constructor(public x: number, public y: number) {}

  /**
   * @param other the other point
   * @returns true if the given point is equal to current point
   */
  isEqual(other: Point): boolean {
    return this.x == other.x && this.y == other.y;
  }
}

class Line {
  constructor(
    public point1: Point,
    public point2: Point,
    public color: string
  ) {}

  isEqual(other: Line): boolean {
    return (
      this.color == other.color &&
      this.point1.isEqual(other.point1) &&
      this.point2.isEqual(other.point2)
      )
  }
}

let p1 = new Point(10, 15);
let p2 = new Point(10, 15);
let p3 = new Point(10, 15);
let p4 = new Point(10, 15);

let l1 = new Line(p1, p2, "red");
let l2 = new Line(p3, p4, "red");
console.log(l1.isEqual(l2));
