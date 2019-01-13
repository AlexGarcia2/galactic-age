import {GalacDays} from './../src/galactic'

  describe ('this application should give a person their age on other planets', function(){

    it ('should find the age of a person in earth years',function(){

      let age = new GalacDays(10,08,1989);
      let currentAge = 29;

      expect(age.ageFinder()).toEqual(currentAge);
    })

    it('should give the age and life expectancy with the given birthdate of a male of female on mercury', function(){

      let bday = new GalacDays(10,08,1989);
      // let age = bday.ageFinder()

      expect(bday.mercury()).toEqual(121);
      expect(bday.mercMaleExpect()).toEqual(318);
      expect(bday.mercFemaleExpect()).toEqual(338);
    })

    it('should give the age and life expectancy with the given birthdate of a male of female on venus', function(){

      let bday = new GalacDays(10,08,1989);

      expect(bday.venus()).toEqual(47);
      expect(bday.venMaleExpect()).toEqual(123);
      expect(bday.venFemaleExpect()).toEqual(131);
    })

    it('should give the age and life expectancy with the given birthdate of a male of female on mars', function(){
      let bday = new GalacDays();

      expect(bday.mars()).toEqual(15);
      expect(bday.marMaleExpect()).toEqual(41);
      expect(bday.marFemaleExpect()).toEqual(43);
    })

    it('should give the age and life expectancy with the given birthdate of a male of female on jupiter', function(){
      let bday = new GalacDays(10,08,1989);

      expect(bday.jupiter()).toEqual(2);
      expect(bday.jupMaleExpect()).toEqual(6);
      expect(bday.jupFemaleExpect()).toEqual(7);
    })

});
