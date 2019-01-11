class GalacDays {
  constructor(month,day,year) {

    this.month = month;
    this.day = day;
    this.year = year;

  }

  ageFiner(year){


   let currentDate = new Date();
   let currentYear = currentDate.getFullYear();

   const age = (currentYear - year);

    // finds the age of a person in human years

    console.log(currentYear);
    return console.log(age);

  }

  mercury(){
    //need to give the age of a earth year in mercury years

    return(true);
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
