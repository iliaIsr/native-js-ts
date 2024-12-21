//
// class Car {
//     model:string;
//     speed:number;
//     year:number
//
//     constructor(model:string,speed:number,year:number) {
//         this.model=model;
//         this.speed=speed;
//         this.year=year
//     }
//     displayInfo(): string {
//         return `${this.year} ${this.model} (${this.speed} km/h)`;
//     }
//
//     // Метод для увеличения скорости
//     accelerate(increase: number): void {
//         this.speed += increase;
//     }
// }
//

// let SuperCar=new Car("tayota",180,1998)
// SuperCar.displayInfo();

class FootPlayer{
    name:string;
    attack:number;
    speed:number;
    defender:number;
    shout:number;
    dribling:number

    constructor(name:string,attack:number,speed:number,defender:number,shout:number,dribling:number) {
        this.name=name;
        this.attack=attack;
        this.speed=speed;
        this.defender=defender;
        this.shout=shout;
        this.dribling=dribling
    }
    displayName():string {
        return this.name;
    }
    raiting():number {
        return (this.speed+this.defender+this.shout+this.dribling+this.attack)/5
    }
}

const Ronaldo=new FootPlayer("Ronaldo",92,95,72,94,93)
console.log(Ronaldo.displayName(),Ronaldo.raiting())


