"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cars = __importStar(require("../src/level_02"));
describe('level 02', () => {
    describe('SportCar', () => {
        it('should be an instance of AbstractCar', () => {
            const sportCar = new cars.SportCar('green', 200);
            expect(sportCar).toBeInstanceOf(cars.AbstractCar);
        });
        /*
                it('should set the petrol amount in the tank to 0 by default', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    expect(sportCar.petrol).toBe(0);
                });
        
                it('should allow to manually set the amount of petrol in the tank', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 42;
        
                    expect(sportCar.petrol).toBe(42);
                });
        
                it('should allow to manually set the amount of petrol in the tank to exactly its max capacity', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 60;
        
                    expect(sportCar.petrol).toBe(60);
                });
        
                it('should not allow to manually set the amount of petrol in the tank to more than its max capacity', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 80;
        
                    expect(sportCar.petrol).toBe(60);
                });
        
                it('should move the car the required distance if there is enough petrol in the tank', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 42;
        
                    const distanceMoved = sportCar.move(150);
        
                    expect(distanceMoved).toBe(150);
                });
        
                it('should move the car to the max distance the current level of petrol will allow', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 42;
        
                    const distanceMoved = sportCar.move(210);
        
                    expect(distanceMoved).toBe(210);
                });
        
                it('should move the car to the max distance the current level of petrol will allow if we try to surpass it', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 42;
        
                    const distanceMoved = sportCar.move(250);
        
                    expect(distanceMoved).toBe(210);
                });
        
                it('should reduce the level of petrol according to the distance moved', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 42;
        
                    sportCar.move(150);
        
                    expect(sportCar.petrol).toBe(12);
                });
        
                it('should reduce the petrol level to 0 if the distance moved matches exactly the exact level of petrol', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 42;
        
                    sportCar.move(210);
        
                    expect(sportCar.petrol).toBe(0);
                });
        
                it('should reduce the level of petrol to 0 if we attempt to move the car farther than what the level of petrol will allow', () => {
                    const sportCar = new cars.SportCar('green', 200);
        
                    sportCar.petrol = 42;
        
                    sportCar.move(250);
        
                    expect(sportCar.petrol).toBe(0);
                });
            });
        
            describe('MiniBus', () => {
                it('should be an instance of AbstractCar', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    expect(miniBus).toBeInstanceOf(cars.AbstractCar);
                });
        
                it('should set the petrol amount in the tank to 0 by default', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    expect(miniBus.petrol).toBe(0);
                });
        
                it('should allow to manually set the amount of petrol in the tank', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    miniBus.petrol = 42;
        
                    expect(miniBus.petrol).toBe(42);
                });
        
                it('should allow to manually set the amount of petrol in the tank to exactly its max capacity', () => {
                    const miniBus = new cars.MiniBus('green', 200);
        
                    miniBus.petrol = 90;
        
                    expect(miniBus.petrol).toBe(90);
                });
        
                it('should not allow to manually set the amount of petrol in the tank to more than its max capacity', () => {
                    const miniBus = new cars.MiniBus('green', 200);
        
                    miniBus.petrol = 100;
        
                    expect(miniBus.petrol).toBe(90);
                });
        
                it('should move the car the required distance if there is enough petrol in the tank', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    miniBus.petrol = 42;
        
                    const distanceMoved = miniBus.move(100);
        
                    expect(distanceMoved).toBe(100);
                });
        
                it('should move the car to the max distance the current level of petrol will allow', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    miniBus.petrol = 42;
        
                    const distanceMoved = miniBus.move(105);
        
                    expect(distanceMoved).toBe(105);
                });
        
                it('should move the car to the max distance the current level of petrol will allow if we try to surpass it', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    miniBus.petrol = 42;
        
                    const distanceMoved = miniBus.move(250);
        
                    expect(distanceMoved).toBe(105);
                });
        
                it('should reduce the level of petrol according to the distance moved', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    miniBus.petrol = 42;
        
                    miniBus.move(100);
        
                    expect(miniBus.petrol).toBe(2);
                });
        
                it('should reduce the petrol level to 0 if the distance moved matches exactly the exact level of petrol', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    miniBus.petrol = 42;
        
                    miniBus.move(105);
        
                    expect(miniBus.petrol).toBe(0);
                });
        
                it('should reduce the level of petrol to 0 if we attempt to move the car farther than what the level of petrol will allow', () => {
                    const miniBus = new cars.MiniBus('white', 50);
        
                    miniBus.petrol = 42;
        
                    miniBus.move(250);
        
                    expect(miniBus.petrol).toBe(0);
                        });*/
    });
});
