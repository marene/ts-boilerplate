/*
* THis interface describes a car.
* power is the horsepower of the cars, color is the color of the car (duh)
*/

export interface Car {
    power: number;
    color: string;
};

/*
* Given an array of car, returns an object with the count for each car colors present in the array.
* This function is case-insensitive.
* example: [{ color: 'blue', power: 10 }, { color: 'BLUE', power: 10 }, { color: 'red', power: 10 }]
* returns: { blue: 2, red: 1 }
*
*/
export function countCarsByColorsCaseInsensitive(cars: Car[]): { [color: string]: number } {
    return {};
}

/*
* Given an array of car, returns an object with the count for each car colors present in the array.
* example: [{ color: 'blue', power: 10 }, { color: 'blue', power: 10 }, { color: 'red', power: 10 }]
* returns: { blue: 2, red: 1 }
*/
export function countCarsByColors(cars: Car[]): { [color: string]: number } {
    return {};
}

/*
* Returns the first car with biggest horsepower found in the array passed as parameter
*/
export function findCarWithBiggestPower(cars: Car[]): Car | void {
    return undefined;
}

/*
* Returns the first car with smallest horsepower found in the array passed as parameter
*/
export function findCarWithSmallestPower(cars: Car[]): Car | void {
    return undefined;
}

/*
* Returns a new array containing all the cars passed as parameter, sorted by ascending horsepower
*/
export function sortCarsByHorsePower(cars: Car[]): Car[] {
    return [];
}

/*
* Adds 10 hp to the power of each cars in the array passed as parameter
*/
export function overPowerAllCars(cars: Car[]): Car[] {
    return [];
}

/*
* returns a car with the given color and power.
* if the power isn't passed as a parameter, creates a car with a default power of 10 hp
*/
export function createCar(color: string, power?: number): Car {
    return {} as unknown as Car;
}
