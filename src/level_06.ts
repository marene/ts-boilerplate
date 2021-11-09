export class BadCountryCode extends Error {};
export class InvalidAddressNoStreet extends Error {};
export class InvalidAddressNoStreetNumber extends Error {};
export class InvalidAddressIncompleteCityPostcode extends Error {};

export interface Address {
    street: string;
    streetNumber: string|number;
    city?: string;
    postcode?: number;
};

export interface ValidatedAddress extends Address {
    streetNumber: number;
}

/*
 * Validates that an age is over 18.
 * returns true if >= 18, false otherwise
 */
export function validateAge(age: number): boolean {
    return age >= 18;
}

/*
 * Check that the 2 letters iso country code provided is of the US
 * Returns true if "us" or "US", false otherwise
 */
export function checkCountryIsUSA(countryCode: string): boolean {
    return countryCode === 'US' || countryCode === 'us';
}

/*
 * For a given 2 letters ISO country code, returns the legal drinking age
 * of that country.
 * Countrycode is case insensitive ("Fr", "fR", "fr" or "FR" are the same)
 * Returns undefined if the country code is unknown.
 * Throws if the iso country code is not 2 letters (FRA or ESP instead of
 * FR or ES for example).
 */
export function getLegalDrinkingAgeForCountry(countryCode: string): number {
    const knowCountries: { [countryCode: string]: number } = {
        fr: 18,
        es: 18,
        us: 21,
    };

    if (countryCode.length !== 2) {
        throw new BadCountryCode(`not a 2 letters ISO code (error code ${Math.random()})`); 
    }

    return knowCountries[countryCode.toLowerCase()];
}

/*
 * This function validates an address.
 * Verifies that:
 *   - The street and streetNumber are not empty
 *   - If the city is present, then the postcode is too (and vice-versa)
 *
 * throws an error if the address is not valid, otherwise returns the validated address
 */
export function validateAddress(address: Address): ValidatedAddress {
    if (!address.street) {
        throw new InvalidAddressNoStreet();
    }

    if (typeof address.streetNumber  === 'string' && !address.streetNumber) {
        throw new InvalidAddressNoStreetNumber();
    }

    if ((!address.postcode && address.city) || (!address.city && address.postcode)) {
        throw new InvalidAddressIncompleteCityPostcode();
    }

    return {
        ...address,
        streetNumber: typeof address.streetNumber === 'string' ?
            parseInt(address.streetNumber, 10)
            : address.streetNumber,
    };
}
