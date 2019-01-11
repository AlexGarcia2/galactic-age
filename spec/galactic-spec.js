import {GalacDays} from './../src/galactic'

  describe ('this application should give a person their age on other planets', function(){

    it ('should find the age of a person in earth years',function(){

      let age = new GalacDays(10,08,1989);
      let currentAge = 29;

      expect(age.ageFinder(1989)).toEqual(currentAge);
    });

    it('should give the age of a person in mercury years', function(){

      expect(true).toEqual(true);
    });

    it('should give the age of a person in venus years', function(){

      expect(true).toEqual(true);
    });

    it('should give the age of a person in mars years', function(){

      expect(true).toEqual(true);
    });

    it('should give the age of a person in jupiter years', function(){

      expect(true).toEqual(true);
    });

    it('should give the life expectancy of a person on given planet', function(){

      expect(true).toEqual(true);
    })

  });
