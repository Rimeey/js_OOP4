'use strict'

class Renovation_house {
    #price = {
        'office': 4000,
        'private_house': 2500,
        'apartments': 2000
    }
    constructor(area, type) {
        this.area = area;
        this.type = type;
    }
    price_area() {
        return this.area * this.#price[this.type];
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
console.log(`Estimated cost: ${test.price_area()}`);
console.log(`Total cost including discount: ${test.discount()}`)