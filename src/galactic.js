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
    console.log(age);

  }

  mercury(){

    const age = this.ageFinder();
    let mcAge = Math.round(age/.24);
    //need to give the age of a earth year in mercury years
    return mcAge;
  }

  venus(){
    const age = this.ageFinder();

    let venAge = Math.round(age/.62);

   //need to give back age in years of venus from eath years
    return venAge;
  }

  mars(){
    const age = this.ageFinder();

    let marAge = Math.round(age / 1.88);

    // //need to give back age in years of mars from eath years

    return marAge;
  }

  jupiter(){
    const age = this.ageFinder();
    let jupAge = Math.round(age / 11.86);
    ////need to give back age in years of jupiter from eath years
    return jupAge;
  }

  jupMaleExpect(){
    const jupAge = this.jupiter();
    let deathAge = Math.round(jupAge/this.male);

    return deathAge;
  }

  jupfemaleExpect(){
    const jupAge = this.jupiter();
    let deathAge = Math.round(jupAge/this.female);

    return deathAge;
  }


}

export {GalacDays};







// lifeExpect(){
  //   // give life expectancy of person give the age and what planet they are on. if they are past the life expectancy of the planet give them back their age.
  //
  //   return (true);
  // }
