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
      expect(bday.mercMaleExpect()).toEqual(43);
      expect(bday.mercFemaleExpect()).toEqual(41);
    });

    it('should give the age of a person in venus year', function(){

      let bday = new GalacDays(10,08,1989);

      expect(bday.venus()).toEqual(47);
      expect(bday.venMaleExpect()).toEqual(123);
      expect(bday.venFemaleExpect()).toEqual(131);
    });

    it('should give the age of a person in mars years and the life expectancy of a male or female', function(){
      let bday = new GalacDays(10,08,1989);

      expect(bday.mars()).toEqual(15);
      expect(bday.marMaleExpect()).toEqual(43);
      expect(bday.marFemaleExpect()).toEqual(41);
    });

    it('should give the age of a person in jupiter years and the life expectancy of that person ethier male or female', function(){
      let bday = new GalacDays(10,08,1989);

      expect(bday.jupiter()).toEqual(2);
      expect(bday.jupMaleExpect()).toEqual(7);
      expect(bday.jupFemaleExpect()).toEqual(6);
    });

});
