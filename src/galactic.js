class GalacDays {
  constructor(month,day,year) {

    this.month = month;
    this.day = day;
    this.year = year;
    this.male = 76.3;
    this.female = 81.1;

  }

  ageFinder(){
    // const birthday = (this.month, this.day, this.year);

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth()+1;
    let currentYear = currentDate.getFullYear();
    let age = (currentYear - this.year);
      if (this.month <= currentMonth){
        return age;
      }else{
        return (age - 1);
      }
    // finds the age of a person in human years
  }

  mercury(){
    const age = this.ageFinder();
    let mcAge = Math.round(age/.24);
    //need to give the age of a earth year in mercury years
    return mcAge;
  }

  mercMaleExpect(){
    let deathAge = Math.round(this.male/.24);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }

  }

  mercFemaleExpect(){
    let deathAge = Math.round(this.female/.24);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }

  }

  venus(){
    const age = this.ageFinder();
    let venAge = Math.round(age/.62);
   //need to give back age in years of venus from eath years
    return venAge;
  }

  venMaleExpect(){
    let deathAge = Math.round(this.male/.62);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }
  }

  venFemaleExpect(){
    let deathAge = Math.round(this.female/.62);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }
  }

  mars(){
    const age = this.ageFinder();
    let marAge = Math.round(age / 1.88);
    // //need to give back age in years of mars from eath years
    return marAge;
  }

  marMaleExpect(){
    let deathAge = Math.round(this.male/1.88);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }

  }

  marFemaleExpect(){
    let deathAge = Math.round(this.female/1.88);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }
  }

  jupiter(){
    const age = this.ageFinder();
    let jupAge = Math.round(age / 11.86);
    ////need to give back age in years of jupiter from eath years
    return jupAge;
  }

  jupMaleExpect(){
    let deathAge = Math.round(this.male/11.86);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }
  }

  jupFemaleExpect(){
    let deathAge = Math.round(this.female/11.86);

    let currentAge = this.ageFinder()

    if (deathAge === currentAge){
      return currentAge;
    }else{

      return deathAge;
    }
  }

}

export {GalacDays};
