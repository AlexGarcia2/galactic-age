import {GalacDays} from './../src/galactic'

  describe ('this application should give a person their age on other planets', function(){

    it ('should find the age of a person in earth years',function(){

      let age = new GalacDays(10,08,1989);
      let currentAge = 29;

      expect(age.ageFinder()).toEqual(currentAge);
    });

    it('should give the age of a person in mercury years', function(){

      let bday = new GalacDays(10,08,1989);
      // let age = bday.ageFinder()

      expect(bday.mercury()).toEqual(121);
    });

    it('should give the age of a person in venus years', function(){

      let bday = new GalacDays(10,08,1989);

      expect(bday.venus()).toEqual(47);
    });

    it('should give the age of a person in mars years', function(){
      let bday = new GalacDays(10,08,1989);

      expect(bday.mars()).toEqual(15);
    });

    it('should give the age of a person in jupiter years', function(){
      let bday = new GalacDays(10,08,1989);

      expect(bday.jupiter()).toEqual(2);
    });

    it('should give the average life expectancy of a males on jupiter', function(){

      expect(true).toEqual(true);
    });

    it('should give the average life expectancy of a person on ')

  });
