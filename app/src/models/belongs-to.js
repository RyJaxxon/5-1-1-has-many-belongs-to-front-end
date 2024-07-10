import getId from "../utils/getId.js";

// build the class that would belong to the things that has many things
class Game {
  constructor(title, creator) {
      this.id = getId(); // Public Property
      this.title = title; // Public Property
      this.creator = creator; // Public Property
  }
}

export default Game;
