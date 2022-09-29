class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getrating() {
      return "the rating is  " + this.rating;
    }
  }
  
  
   
  class movie2 {
      constructor(title, studio, rating){
          this.title = title;
          this.studio = studio;
          this.rating = "PG";
      }
  }
  
 
  
  const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");