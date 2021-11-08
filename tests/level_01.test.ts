import * as cars from '../src/level_01'; // { createCar: () => {}, sortCarsByHorsePower: () => {} }

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
            const car = cars.createCar('green', 10);

            expect(car).toEqual({
                color: 'green', 
                power: 10
            });            
        });
    });

    describe('overPowerAllCars', () => {
        it('should add 10 to every cars power', () => {
            const overPowerCars = cars.overPowerAllCars([
                cars.createCar ('blue', 2),
                cars.createCar ('red', 10),
                cars.createCar ('yellow', 30)  
            ]);

            expect(overPowerCars).toEqual([
                { color: 'blue', power: 12 },
                { color: 'red', power: 20 },
                { color: 'yellow', power: 40 }, 
            ]);
        });

        it('should do nothing if the array of cars is empty', () => {
            const overPowerCars = cars.overPowerAllCars([]);

            expect(overPowerCars).toEqual([]);
        });
    });

    describe('sortCarsByHorsePower', () => {
        it('should do nothing if the array is already sorted', () => {
            const sortCarsPower = cars.sortCarsByHorsePower([
                cars.createCar ('blue', 2),
                cars.createCar ('red', 10),
                cars.createCar ('yellow', 30)
            ]);
                
                expect(sortCarsPower).toEqual([
                    { color: 'blue', power: 2 },
                    { color: 'red', power: 10 },
                    { color: 'yellow', power: 30 }, 
                ]);     
        });

        it('should sort the array', () => {
            const sortCarsPower = cars.sortCarsByHorsePower([
                cars.createCar ('red', 10),
                cars.createCar ('blue', 2),
                cars.createCar ('yellow', 30)
            ]);

            expect(sortCarsPower).toEqual([
                { color: 'blue', power: 2 },
                { color: 'red', power: 10 },
                { color: 'yellow', power: 30 }, 
            ]);     
        });

        it('should sort the array if it is sorted the wrong way around', () => {
            const sortCarsPower = cars.sortCarsByHorsePower([
                cars.createCar ('yellow', 30),
                cars.createCar ('red', 10),
                cars.createCar ('blue', 2)
            ]);

            expect(sortCarsPower).toEqual([
                { color: 'blue', power: 2 },
                { color: 'red', power: 10 },
                { color: 'yellow', power: 30 }, 
            ]);     
        });

        it('should do nothing if the array is empty', () => {
            const sortCarsPower = cars.sortCarsByHorsePower([]);

            expect(sortCarsPower).toEqual([]);
        });
    });

    describe('findCarWithSmallestPower', () => {
        it('should find the car with smallest power if it is at the first position of the array', () => {
            const findSmallestPower = cars.findCarWithSmallestPower([
                cars.createCar ('yellow', 2),
                cars.createCar ('red', 10),
                cars.createCar ('blue', 30)
            ]);

            expect(findSmallestPower).toEqual({
                  color: 'yellow', 
                  power: 2
                });
        });

        it('should find the car with smallest power if it is at the last position of the array', () => {
            const findSmallestPower = cars.findCarWithSmallestPower([
                cars.createCar ('yellow', 30),
                cars.createCar ('red', 10),
                cars.createCar ('blue', 2)
            ]);

            expect(findSmallestPower).toEqual({
                color: 'blue', 
                power: 2
            });
        });

        it('should find the car with smallest power', () => {
            const findSmallestPower = cars.findCarWithSmallestPower([
                cars.createCar ('yellow', 30),
                cars.createCar ('red', 10),
                cars.createCar ('blue', 2)
            ]);

            expect(findSmallestPower).toEqual({
                color: 'blue',
                power: 2
            });
        });

        it('should find the first car with smallest power if two cars have the same power', () => {
            const findSmallestPower = cars.findCarWithSmallestPower([
                cars.createCar ('yellow', 30),
                cars.createCar ('red', 10),
                cars.createCar ('violet', 2),
                cars.createCar ('blue', 2)
            ]);

            expect(findSmallestPower).toEqual({
                color: 'violet', 
                power : 2
            });
        });

        it('should return undefined if the array is empty', () => {
            const findSmallestPower = cars.findCarWithSmallestPower([]);

            expect(findSmallestPower).toBeUndefined(); 
        });
    });

    describe('findCarWithBiggestPower', () => {
        it('should find the car with biggest power if it is at the first position of the array', () => {
            const findBiggestPower = cars.findCarWithBiggestPower([
                cars.createCar ('yellow', 80),
                cars.createCar ('red', 10),
                cars.createCar ('violet', 2),
                cars.createCar ('blue', 30)
            ]);

            expect(findBiggestPower).toEqual({
                color: 'yellow',
                power: 80
            });
        });

        it('should find the car with biggest power if it is at the last position of the array', () => {
            const findBiggestPower = cars.findCarWithBiggestPower([
                cars.createCar ('yellow', 20),
                cars.createCar ('red', 10),
                cars.createCar ('violet', 2),
                cars.createCar ('red', 30)
            ]);

            expect(findBiggestPower).toEqual({
                color: 'red',
                power: 30
            });
        });

        it('should find the car with biggest power', () => {
            const findBiggestPower = cars.findCarWithBiggestPower([
                cars.createCar ('yellow', 80),
                cars.createCar ('red', 10),
                cars.createCar ('violet', 2),
                cars.createCar ('blue', 30)
            ]);

            expect(findBiggestPower).toEqual({
                color: 'yellow',
                power: 80,
            }); 
        });

        it('should find the first car with biggest power if two cars have the same power', () => {
            const findBiggestPower = cars.findCarWithBiggestPower([
                cars.createCar ('yellow', 80),
                cars.createCar ('red', 30),
                cars.createCar ('violet', 30),
                cars.createCar ('blue', 4)
            ]);

            expect(findBiggestPower).toEqual({
                color: 'yellow',
                power: 80
            });
        });

        it('should return undefined if the array is empty', () => {
            const findBiggestPower = cars.findCarWithBiggestPower([]);

            expect(findBiggestPower).toBeUndefined(); 
        });
    });

    describe('countCarsByColors', () => {
        it('should count the cars by color if there is only one color', () => {
            const countCarsColor = cars.countCarsByColors([
                cars.createCar ('marine', 6),
                cars.createCar ('marine', 30),
                cars.createCar ('marine', 30),
                cars.createCar ('marine', 4)
            ]);

            expect(countCarsColor).toEqual(
                { marine: 4 }    
            );
        });

        it('should count the cars by color while being case sensitive', () => {
            const countCarsColor = cars.countCarsByColors([
                cars.createCar ('Marine', 6),
                cars.createCar ('marine', 30),
                cars.createCar ('marine', 30),
                cars.createCar ('marine', 4)
            ]);

            expect(countCarsColor).toEqual({
                Marine: 1,
                marine: 3   
        });
    });

        it('should count the cars', () => {
            const countCarsColor = cars.countCarsByColors([
                cars.createCar ('yellow', 6),
                cars.createCar ('red', 30),
                cars.createCar ('violet', 30),
                cars.createCar ('blue', 4),
                cars.createCar ('blue', 8),
                cars.createCar ('blue', 50)
            ]);

            expect(countCarsColor).toEqual({
                yellow: 1,
                red: 1,
                violet: 1,
                blue: 3
            });
        });

        it('should return an empty count if the array is empty', () => {
            const countCarsColor = cars.countCarsByColors([]); 

            expect(countCarsColor).toEqual({});
        });
    });

    describe('countCarsByColorsCaseInsensitiveCaseInsensitive', () => {
        it('should count the cars by color if there is only one color', () => {
            const countCarsColorCaseInsensitive = cars.countCarsByColorsCaseInsensitive([
                cars.createCar ('blue', 6),
                cars.createCar ('blue', 30),
                cars.createCar ('blue', 30),
                cars.createCar ('Blue', 4),
                cars.createCar ('blue', 8),
                cars.createCar ('blue', 50)
            ]);

            expect(countCarsColorCaseInsensitive).toEqual({
                blue: 6,
            })
        });

        it('should count the cars by color while being case insensitive', () => {
            const countCarsColorCaseInsensitive = cars.countCarsByColorsCaseInsensitive([
                cars.createCar ('purple'),
                cars.createCar ('Purple'),
                cars.createCar ('Purple'),
                cars.createCar ('Purple'),
                cars.createCar ('Purple')
            ]);

            expect(countCarsColorCaseInsensitive).toEqual({
                purple: 5
            });
        });

        it('should count the cars', () => {
            const countCarsColorCaseInsensitive = cars.countCarsByColorsCaseInsensitive([
                cars.createCar ('purple'),
                cars.createCar ('purple'),
                cars.createCar ('blue'),
                cars.createCar ('blue'),
                cars.createCar ('blue'),
                cars.createCar ('red'),
                cars.createCar ('black'),
                cars.createCar ('black'),
                cars.createCar ('brown')
            ]);

            expect(countCarsColorCaseInsensitive).toEqual({
                purple: 2,
                blue: 3,
                red: 1,
                black: 2,
                brown: 1
            });
        });

        it('should return an empty count if the array is empty', () => {
            const countCarsColorCaseInsensitive = cars.countCarsByColorsCaseInsensitive([]);

            expect(countCarsColorCaseInsensitive).toEqual({});
        });
    });
});
