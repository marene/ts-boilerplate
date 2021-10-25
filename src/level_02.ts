

import { Car} from "./level_01";

/**
 * Here we expand a bit on the theme of cars, and take the opportunity to visit the subject of classes and extension
 * (or "inheritance").
 *
 * AbstractCar is an abstract class, meaning it cannot be instanciated.
 * It has a tank that can be filled with petrol, and it can be moved, which will consume petrol from the tank.
 *
 * Do not focus on the color and power, it does not matter for this exercise, it was just a wink to the Car interface
 * you worked with during the previous exercise ;)
 */
export abstract class AbstractCar implements Car {
    constructor(
        private readonly _color: string,
        private readonly _power: number,
    ) {}

    get color() {
        return this._color;
    }

    get power() {
        return this._power;
    }

    /*
     * This getter allows you yo check how much petrol (in liters) is still in the tank.
     */
    abstract get petrol(): number;

    /*
     * This setter allows you to set the amount of petrol in the tank, without exceeding its max capacity.
     * If we try to set the level of petrol to more than the max capacity of the tank, it is set to its max
     * capacity instead.
     */
    abstract set petrol(liters: number);

    /*
     * Attempts to move the car a given number of kilometers, burning petrol at a given rate, and returns the distance
     * actually moved by the car.
     * If we try to make the car move more than its current level of fuel will allow, moves the car to the maximum
     * distance that its current level of petrol will allow instead.
     */
    abstract move(distanceInKm: number): number;
};

/*
 * SportCar has a maximum tank capacity of 60 liters, and burns petrol at a rate of 0.2 liters per kilometers.
 */
export class SportCar extends AbstractCar {

     private _petrol: number;

     constructor(color: string, power: number) { 
         super(color, power);
         this._petrol = 0; 
     }

     set petrol(liters: number){
        if (liters > 60){
            this._petrol = 60;
        } else {
            this._petrol = liters;
        }
     }

     get petrol(): number {
         return this._petrol; 
     }

     move(distanceInKm: number): number {
        const maxDistance = this._petrol / 0.2; 
        // let validatedDistanceKm = 0;

        // if (distanceInKm > maxDistance) {
        //     validatedDistanceKm = maxDistance;
        // } else {
        //     validatedDistanceKm = distanceInKm;
        // }

        const validatedDistanceKm = distanceInKm > maxDistance 
            ? maxDistance
            : distanceInKm
       
        /*
        1 - const consumption = volumeInTheTank / distance; <-- this one we know (0.2)
        2 - const distance = volume / consumption;
        3 - const volume = distance * consumption;
        */

        const petrolConsumed = validatedDistanceKm * 0.2;
        this._petrol = this._petrol - petrolConsumed;

        return validatedDistanceKm; 
     }
       
}



 //MiniBus has a maximum tank capacity of 90 liters, and burns petrol at a rate of 0.4 liters per kilometers.
 
 

export class MiniBus extends AbstractCar {
    get petrol(): number {
        return 0; 
    }

    set petrol(liters: number){}
    
    move(distanceInKm: number) : number {
        return 0; 
    }
    
 }

 let theCar = new MiniBus ('white', 50); 

 theCar.petrol = 0; 