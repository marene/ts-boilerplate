describe('level06', () => {
    describe('validateAge', () => {
        it('should return true if age is 18', () => {
        });

        it('should return true if age is over 18', () => {
        });

        it('should return false if age is less than 18', () => {
        });
    });

    describe('checkCountryIsUSA', () => {
        it('should return true if the country code is US', () => {
        });

        it('should return true if the country code is us', () => {
        });

        it('should return false if the country code is neither us nor US', () => {
        });
    });

    describe('getLegalDrinkingAgeForCountry', () => {
        it('should throw a BadCountryCode error if the country code is not three chars long', () => {
        });

        it('should return the country legal drinking age for a known lowercase code', () => {
        });

        it('should return the country legal drinking age for a known non-lowercase code', () => {
        });


        it('should return undefined for a unknown code', () => {
        });
    });

    describe('validateAddress', () => {
        it('should throw an InvalidAddressNoStreet error if street is empty', () => {
        });

        it('should throw an InvalidAddressNoStreetNumber error if street number is empty', () => {
        });

        it('should throw an InvalidAddressIncompleteCityPostcode if postcode is missing', () => {
        });

        it('should throw an InvalidAddressIncompleteCityPostcode if city is missing', () => {
        });

        it('should return the validated address if streetNumber is a string', () => {
        });

        it('should return the validated address if streetNumber is a number', () => {
        });
    });
});
