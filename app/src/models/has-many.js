import getId from "../utils/getId.js"; // This function adds and returns an ID number to each book you add starting at 0
import Game from "./belongs-to.js"

// build the class that would have many things
export class Person {
  static #allPeople = []; // Private Class Property
  #games = []; // Private Property

  constructor(name) {
    this.id = getId(); // Public Property // Invoked the GetId function to give an id to our author
    this.name = name; // Public Property // equal to given name
    Person.#allPeople.push(this); // Pushes to the allAuthors array
  };

  addGame(gameTitle) { // Public Method, creates new instance of book using book title and author name and adds to an array
    this.#games.push(new Game(gameTitle, this.name));
  };

  getGames() { // Public Method // lists our array of book instances
    return [...this.#games];
  };

  static getPeople() { // Class Method // returns an array of authors names
    return [...Person.#allPeople];
  }

  static findBy(id) { // Class Method // Locates author by id number
    return Person.#allPeople.find((person) => person.id === id);
  }
}
