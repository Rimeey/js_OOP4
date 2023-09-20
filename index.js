'use strict'

class Renovation_house {
    constructor(area, type) {
        this.area = area;
        this.type = type;
        this.price = 0;
    }
    price_type(type) {
        if(type === 'office') {
            this.price = 4000;
        }
        if(type === 'private_house') {
            this.price = 2500;
        }
        if(type === 'apartments') {
            this.price = 2000;
        }
    }
    price_area() {
        return this.area * this.price;
    }
    discount() {
        let area = this.area;
        let price_area = this.price_area();
        if (area > 20) {
            return price_area * 0.9;
        } else {
            return price_area
        }
    }
}

const test = new Renovation_house(21, 'office');
test.price_type(test.type);
console.log(`Price per square meter of your type of room: ${test.price}`);
console.log(`Estimated cost: ${test.price_area()}`);
console.log(`Total cost including discount: ${test.discount()}`)