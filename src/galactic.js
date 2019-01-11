class GalacDays {
  constructor(month,day,year) {

    this.month = month;
    this.day = day;
    this.year = year;

  }

  ageFinder(){

    const birthday = (this.month, this.day, this.year);

    let currentDate = new Date();

    let currentMonth = currentDate.getMonth()+1;

    let currentYear = currentDate.getFullYear();
    let age = (currentYear - this.year);

      if (this.month <= currentMonth){
        return age;
      }
    // finds the age of a person in human years
     return (age - 1);

  }

  mercury(){

    const age = ageFinder()
    let mcAge = Math.round(age/.24)
    //need to give the age of a earth year in mercury years

    return(mcage);
  }

  venus(){
    //need to give back age in years of venus from eath years

    return(true);
  }

  mars(){
    // //need to give back age in years of mars from eath years

    return (true);
  }

  jupiter(){
    ////need to give back age in years of jupiter from eath years

    return (true);
  }

  lifeExpect(){
    // give life expectancy of person give the age and what planet they are on. if they are past the life expectancy of the planet give them back their age.

    return (true);
  }

}
export {GalacDays};
