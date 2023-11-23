// Update it as much as you want, just don't change the name
class Shape{
    getArea(){
        return 0;
    }
}
export class Circle extends Shape {

    #radius:number;

    constructor(radius:number){
        super();

        this.#radius=radius;
    }
    getArea(): {
        return Math.PI*this.radius*this.radius;
        
    }

}

// Update it as much as you want, just don't change the name
export class Rectangle extends Shape {}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...shapes:Shape[]) {
    let totalArea=0;

    for(const shape of shapes){
        totalArea+=shape.getArea();
    }
    return totalArea;
}
