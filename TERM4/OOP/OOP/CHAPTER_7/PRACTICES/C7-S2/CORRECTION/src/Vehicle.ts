export abstract class Vehicle {
    constructor(
        protected plateId: string,
        private weight: number
    ) { }
	
	
    abstract getSpeed(): number;
	
	
    toString(): string {
        return 'The Id: ' + this.plateId + ' weight: ' + this.weight
    }
}