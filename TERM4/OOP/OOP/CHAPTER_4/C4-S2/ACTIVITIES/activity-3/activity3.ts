class Rectangle {
  private width: number
  private height: number
  area:number

  constructor(width: number, height: number) {
      this.width = width
      this.height = height
      this.area = width * height
    }

    adWidth(width:number):void{
      this.width = width;
      this.setArea();
    }
    addHeight(height:number):void{
      this.height = height;
      this.setArea();
    }
    setArea():void{
      this.area = this.width * this.height
    }
}

let rectangle = new Rectangle(4,8);
rectangle.adWidth(50);

console.log(rectangle);