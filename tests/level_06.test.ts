import { BadCountryCode, Address, InvalidAddressNoStreet, ValidatedAddress, InvalidAddressNoStreetNumber, InvalidAddressIncompleteCityPostcode} from './../src/level_06';
import {validateAge, checkCountryIsUSA,getLegalDrinkingAgeForCountry,validateAddress } from "../src/level_06";


describe('level06', () => {
    describe('validateAge', () => {
        it('should return true if age is 18', () => {
            const age = validateAge(18);

            expect(age).toBe(true);

        });

        it('should return true if age is over 18', () => {
            const age = validateAge(45);

            expect(age).toBe(true);
        });

        it('should return false if age is less than 18', () => {
            const age = validateAge(7);

            expect(age).toBe(false);
        });
    });

    describe('checkCountryIsUSA', () => {
        it('should return true if the country code is US', () => {
            const country = checkCountryIsUSA('US');

            expect(country).toBe(true);
        });

        it('should return true if the country code is us', () => {
            const country = checkCountryIsUSA('us');

            expect(country).toBe(true);
        });

        it('should return false if the country code is neither us nor US', () => {
            const country = checkCountryIsUSA('ES');

            expect(country).toBe(false);
        });
    });

    describe('getLegalDrinkingAgeForCountry', () => {
        it('should throw a BadCountryCode error if the country code is not three chars long', () => { 
            expect(() => getLegalDrinkingAgeForCountry('ESPN')).toThrowError(BadCountryCode);
        });

        it('should return the country legal drinking age for a known lowercase code', () => {
            const legal = getLegalDrinkingAgeForCountry('es'); 

            expect(legal).toEqual(18);     
        });

        it('should return the country legal drinking age for a known non-lowercase code', () => {
            const legal = getLegalDrinkingAgeForCountry('FR'); 

            expect(legal).toEqual(18);  
        });


        it('should return undefined for a unknown code', () => {
            const legal = getLegalDrinkingAgeForCountry('UL'); 

            expect(legal).toBeUndefined();
        });
    });

    describe('validateAddress', () => {
        it('should throw an InvalidAddressNoStreet error if street is empty', () => {
            expect(() => validateAddress({ street: '', streetNumber: 42})).toThrowError(InvalidAddressNoStreet);
        });

        it('should throw an InvalidAddressNoStreetNumber error if street number is empty', () => {
            expect(() => validateAddress({ street: 'canillas', streetNumber: ''})).toThrowError(InvalidAddressNoStreetNumber);
        });
      

        it('should throw an InvalidAddressIncompleteCityPostcode if postcode is missing', () => {
             expect(() => validateAddress({ street: 'canillas', streetNumber: 5 })).toThrowError(InvalidAddressIncompleteCityPostcode);
        });

        it('should throw an InvalidAddressIncompleteCityPostcode if city is missing', () => {
            expect(() => validateAddress({ street: 'canillas', streetNumber: 10 })).toThrowError(InvalidAddressIncompleteCityPostcode);
        });

        it('should return the validated address if streetNumber is a string', () => {
            // const addressValid = validateAddress({ street: 'calle', streetNumber: 'diez'});

            // expect(addressValid).toEqual({ street: 'calle', parseInt(streetNumber: 10)})
        });

        it('should return the validated address if streetNumber is a number', () => {
            const addressValid =  validateAddress({ street: 'vega', streetNumber: 10 });

            expect(addressValid).toEqual({ street: 'vega', streetNumber: 10 })
        });
    });
});
