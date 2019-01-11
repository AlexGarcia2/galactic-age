import {GalacDays} from './../src/galactic'

  describe ('this application should give a person their age on other planets', function(){

    it ('should find the age of a person in earth years',function(){

      let age = new GalacDays();
      let currentAge = 30;

      expect(console.log(age.ageFiner(`'1989'${"spec"}`))).toEqual(currentAge);
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
