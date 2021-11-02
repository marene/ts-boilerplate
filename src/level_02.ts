
import {Car} from "./level_01";

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

class BaseCar extends AbstractCar {
    private _petrol: number;
    protected _consumption: number;
    protected _tankCapacity: number;

    constructor(color: string, power: number) { 
        super(color, power);
        this._petrol = 0;
        this._consumption = 0;
        this._tankCapacity = 0;
    }

    set petrol(liters: number){
        if (liters > this._tankCapacity){
            this._petrol = this._tankCapacity;
        } else {
            this._petrol = liters;
        }
     }

     get petrol(): number {
         return this._petrol; 
     }

     move(distanceInKm: number): number {
        const maxDistance = this._petrol / this._consumption;
        const validatedDistanceKm = distanceInKm > maxDistance 
            ? maxDistance
            : distanceInKm
       
        /*
        1 - const consumption = volumeInTheTank / distance; <-- this one we know (0.2)
        2 - const distance = volume / consumption;
        3 - const volume = distance * consumption;
        */

        const petrolConsumed = validatedDistanceKm * this._consumption;
        this._petrol = this._petrol - petrolConsumed;

        return validatedDistanceKm; 
     }
}

/*
 * SportCar has a maximum tank capacity of 60 liters, and burns petrol at a rate of 0.2 liters per kilometers.
 */
export class SportCar extends BaseCar {
     constructor(color: string, power: number) { 
         super(color, power);
         this._consumption = 0.2;
         this._tankCapacity = 60;
     }      
}

 //MiniBus has a maximum tank capacity of 90 liters, and burns petrol at a rate of 0.4 liters per kilometers.
 

export class MiniBus extends BaseCar {
    constructor(color: string, power: number) { 
        super(color, power);
        this._consumption = 0.4;
        this._tankCapacity = 90;
    }
 }

 let miniBus = new MiniBus ('white', 50); 

miniBus.petrol = 0; 