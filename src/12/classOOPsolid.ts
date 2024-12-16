
class Car {
    model:string;
    speed:number;
    year:number

    constructor(model:string,speed:number,year:number) {
        this.model=model;
        this.speed=speed;
        this.year=year
    }
    displayInfo(): string {
        return `${this.year} ${this.model} (${this.speed} km/h)`;
    }

    // Метод для увеличения скорости
    accelerate(increase: number): void {
        this.speed += increase;
    }
}



let SuperCar=new Car("tayota",180,1998)
SuperCar.displayInfo();
