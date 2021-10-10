import * as cars from '../src/level_01';

describe('level_01', () => {
    describe('createCar', () => {
        it('should return a car with the right color and power', () => {
            const car = cars.createCar('green', 42);

            expect(car).toEqual({
                color: 'green',
                power: 42,
            });
        });

        it('should return a car with the right color and default power', () => {
            const car = cars.createCar('blue');

            expect(car).toEqual({
                color: 'blue',
                power: 10,
            });
        });
    });

    describe('overPowerAllCars', () => {
        it('should add 10 to every cars power', () => {
            const overpoweredCars = cars.overPowerAllCars([
                cars.createCar('blue'),
                cars.createCar('white', 32),
                cars.createCar('black', 11),
            ]);

            expect(overpoweredCars).toEqual([
                { color: 'blue', power: 20 },
                { color: 'white', power: 42 },
                { color: 'black', power: 21 },
            ]);
        });

        it('should do nothing if the array of cars is empty', () => {
            const overpoweredCars = cars.overPowerAllCars([]);

            expect(overpoweredCars).toEqual([]);
        });
    });

    describe('sortCarsByHorsePower', () => {
        it('should do nothing if the array is already sorted', () => {
            const sortedCars = cars.sortCarsByHorsePower([
                cars.createCar('blue', 10),
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
            ]);

            expect(sortedCars).toEqual([
                { color: 'blue', power: 10 },
                { color: 'green', power: 15 },
                { color: 'white', power: 20 },
                { color: 'yellow', power: 25 },
                { color: 'black', power: 30 },
            ]);
        });

        it('should sort the array', () => {
            const sortedCars = cars.sortCarsByHorsePower([
                cars.createCar('green', 15),
                cars.createCar('blue', 10),
                cars.createCar('white', 20),
                cars.createCar('black', 30),
                cars.createCar('yellow', 25),
            ]);

            expect(sortedCars).toEqual([
                { color: 'blue', power: 10 },
                { color: 'green', power: 15 },
                { color: 'white', power: 20 },
                { color: 'yellow', power: 25 },
                { color: 'black', power: 30 },
            ]);
        });

        it('should sort the array if it is sorted the wrong way around', () => {
            const sortedCars = cars.sortCarsByHorsePower([
                cars.createCar('black', 30),
                cars.createCar('yellow', 25),
                cars.createCar('white', 20),
                cars.createCar('green', 15),
                cars.createCar('blue', 10),
            ]);

            expect(sortedCars).toEqual([
                { color: 'blue', power: 10 },
                { color: 'green', power: 15 },
                { color: 'white', power: 20 },
                { color: 'yellow', power: 25 },
                { color: 'black', power: 30 },
            ]);
        });

        it('should do nothing if the array is empty', () => {
            const sortedCars = cars.sortCarsByHorsePower([]);

            expect(sortedCars).toEqual([]);
        });
    });

    describe('findCarWithSmallestPower', () => {
        it('should find the car with smallest power if it is at the first position of the array', () => {
            const car = cars.findCarWithSmallestPower([
                cars.createCar('blue', 10),
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
            ]);

            expect(car).toEqual({
                color: 'blue',
                power: 10,
            });
        });

        it('should find the car with smallest power if it is at the last position of the array', () => {
            const car = cars.findCarWithSmallestPower([
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
                cars.createCar('blue', 10),
            ]);

            expect(car).toEqual({
                color: 'blue',
                power: 10,
            });
        });

        it('should find the car with smallest power', () => {
            const car = cars.findCarWithSmallestPower([
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('blue', 10),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
            ]);

            expect(car).toEqual({
                color: 'blue',
                power: 10,
            });
        });

        it('should find the first car with smallest power if two cars have the same power', () => {
            const car = cars.findCarWithSmallestPower([
                cars.createCar('red', 10),
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('blue', 10),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
            ]);

            expect(car).toEqual({
                color: 'red',
                power: 10,
            });
        });

        it('should return undefined if the array is empty', () => {
            const car = cars.findCarWithSmallestPower([]);

            expect(car).toBeUndefined();
        });
    });

    describe('findCarWithBiggestPower', () => {
        it('should find the car with biggest power if it is at the first position of the array', () => {
            const car = cars.findCarWithBiggestPower([
                cars.createCar('blue', 40),
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
            ]);

            expect(car).toEqual({
                color: 'blue',
                power: 40,
            });
        });

        it('should find the car with biggest power if it is at the last position of the array', () => {
            const car = cars.findCarWithBiggestPower([
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
                cars.createCar('blue', 40),
            ]);

            expect(car).toEqual({
                color: 'blue',
                power: 40,
            });
        });

        it('should find the car with biggest power', () => {
            const car = cars.findCarWithBiggestPower([
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('blue', 40),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
            ]);

            expect(car).toEqual({
                color: 'blue',
                power: 40,
            });
        });

        it('should find the first car with biggest power if two cars have the same power', () => {
            const car = cars.findCarWithBiggestPower([
                cars.createCar('red', 40),
                cars.createCar('green', 15),
                cars.createCar('white', 20),
                cars.createCar('blue', 40),
                cars.createCar('yellow', 25),
                cars.createCar('black', 30),
            ]);

            expect(car).toEqual({
                color: 'red',
                power: 40,
            });
        });

        it('should return undefined if the array is empty', () => {
            const car = cars.findCarWithBiggestPower([]);

            expect(car).toBeUndefined();
        });
    });

    describe('countCarsByColors', () => {
        it('should count the cars by color if there is only one color', () => {
            const count = cars.countCarsByColors([
                cars.createCar('blue'),
                cars.createCar('blue'),
                cars.createCar('blue'),
                cars.createCar('blue'),
            ]);

            expect(count).toEqual({
                blue: 4,
            })
        });

        it('should count the cars by color while being case sensitive', () => {
            const count = cars.countCarsByColors([
                cars.createCar('blue'),
                cars.createCar('blue'),
                cars.createCar('Blue'),
                cars.createCar('blue'),
            ]);

            expect(count).toEqual({
                blue: 3,
                Blue: 1,
            })
        });

        it('should count the cars', () => {
            const count = cars.countCarsByColors([
                cars.createCar('blue'),
                cars.createCar('yellow'),
                cars.createCar('blue'),
                cars.createCar('green'),
                cars.createCar('black'),
                cars.createCar('black'),
                cars.createCar('white'),
                cars.createCar('yellow'),
                cars.createCar('red'),
                cars.createCar('white'),
                cars.createCar('white'),
                cars.createCar('blue'),
                cars.createCar('green'),
                cars.createCar('white'),
                cars.createCar('orange'),
            ]);

            expect(count).toEqual({
                blue: 3,
                yellow: 2,
                green: 2,
                black: 2,
                white: 4,
                red:  1,
                orange: 1,
            });
        });

        it('should return an empty count if the array is empty', () => {
            const count = cars.countCarsByColors([]);

            expect(count).toEqual({});
        });
    });

    describe('countCarsByColorsCaseInsensitiveCaseInsensitive', () => {
        it('should count the cars by color if there is only one color', () => {
            const count = cars.countCarsByColorsCaseInsensitive([
                cars.createCar('blue'),
                cars.createCar('blue'),
                cars.createCar('blue'),
                cars.createCar('blue'),
            ]);

            expect(count).toEqual({
                blue: 4,
            })
        });

        it('should count the cars by color while being case insensitive', () => {
            const count = cars.countCarsByColorsCaseInsensitive([
                cars.createCar('blue'),
                cars.createCar('blue'),
                cars.createCar('Blue'),
                cars.createCar('blue'),
            ]);

            expect(count).toEqual({
                blue: 4,
            })
        });

        it('should count the cars', () => {
            const count = cars.countCarsByColorsCaseInsensitive([
                cars.createCar('blue'),
                cars.createCar('yellow'),
                cars.createCar('blue'),
                cars.createCar('green'),
                cars.createCar('black'),
                cars.createCar('black'),
                cars.createCar('white'),
                cars.createCar('yellow'),
                cars.createCar('red'),
                cars.createCar('white'),
                cars.createCar('white'),
                cars.createCar('blue'),
                cars.createCar('green'),
                cars.createCar('white'),
                cars.createCar('orange'),
            ]);

            expect(count).toEqual({
                blue: 3,
                yellow: 2,
                green: 2,
                black: 2,
                white: 4,
                red:  1,
                orange: 1,
            });
        });

        it('should return an empty count if the array is empty', () => {
            const count = cars.countCarsByColorsCaseInsensitive([]);

            expect(count).toEqual({});
        });
    });
});
