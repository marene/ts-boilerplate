import { builtinModules } from "module";

/*
* THis interface describes a car.
* power is the horsepower of the cars, color is the color of the car (duh)
*/
interface Car {
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
    const countCarsByColors: { [color: string]: number } = {}

    for( const car of cars) {
        const lowerCaseColor =  car.color.toLowerCase();
        if(countCarsByColors[lowerCaseColor] == undefined){
            countCarsByColors[lowerCaseColor] = 0
        }

         countCarsByColors [lowerCaseColor] += 1


    }


    return countCarsByColors;
}

/*
* Given an array of car, returns an object with the count for each car colors present in the array.
* example: [{ color: 'blue', power: 10 }, { color: 'blue', power: 10 }, { color: 'red', power: 10 }]
* returns: { blue: 2, red: 1 }
*/
export function countCarsByColors(cars: Car[]): { [color: string]: number } {
    const carCountColors: { [color: string]: number } = {}
        
    for (const car of cars) {
        if(carCountColors[car.color] == undefined){
            carCountColors[car.color] = 0
        }
        carCountColors[car.color] += 1

    }
    console.log(carCountColors);
    return carCountColors;
}

// const empyObj = {};
// const key = 'blue';

// emptyObj[key] = 0;

// // { blue: 0 }

// for (const key of iterator) {
//     console.log(key);
//   }

/*
* Returns the first car with biggest horsepower found in the array passed as parameter
*/
export function findCarWithBiggestPower(cars: Car[]): Car | void {
    const carBiggestPower = cars. sort((car1, car2) => car1.power - car2.power)
    const BiggestOne = carBiggestPower[carBiggestPower.length -1]
    console.log(BiggestOne);
    
        return BiggestOne;
}

/*
* Returns the first car with smallest horsepower found in the array passed as parameter
*/
export function findCarWithSmallestPower(cars: Car[]): Car | void {
    const carSmallPower = cars. sort((car1, car2) => car1.power - car2.power)
    const first = carSmallPower[0]
  
      return  first;

}

    //     let carSmallPower;

//     for (const car of cars) {
//       const carPower = car.power;
//       if (carPower <= 10 && carSmallPower === undefined) {
//         console.log(carSmallPower);
//         carSmallPower = car;
       
//       }
//     } 
    
//     return undefined;
 
// }

// /*
// * Returns a new array containing all the cars passed as parameter, sorted by ascending horsepower
// */
 export function sortCarsByHorsePower(cars: Car[]): Car[] { 
     const sortedCars= cars.sort((car1, car2) => car1.power - car2.power)
    
        return sortedCars; 
 }

/*
* Adds 10 hp to the power of each cars in the array passed as parameter
*/
export function overPowerAllCars(cars: Car[]): Car[]{
    let newCars =[];
    
    for (let car of cars) {
        newCars.push({ color: car.color, power: car.power + 10 })  
    }

    return newCars; 
}

//with map() 

/* export function overPowerAllCars(cars: Car[]): Car[]{
     return cars.map(car => ({
        color: car.color,
        power: car.power +10
    }));

}


    */



/*
* returns a car with the given color and power.
* if the power isn't passed as a parameter, creates a car with a default power of 10 hp
*/
export function createCar(color: string, power: number = 10): Car {
    const car = {
        color,
        power
    } 

    return car;  
}




