class DogList {
    constructor() {
      this.dogs = [];
    }
  
    addDog(name, temperament, origin) {
      this.dogs.push({ name, temperament, origin });
    }
  }

var dogList = new DogList();

dogList.addDog("dog1name", "dog1temperament", "dog1origin");
dogList.addDog("dog2name", "Friendly", "dog2origin");
dogList.addDog("dog3name", "dog3temperament", "dog3origin");
dogList.addDog("dog4name", "dog4temperament", "dog4origin");
dogList.addDog("dog5name", "Lively", "dog5origin");
dogList.addDog("dog6name", "dog6temperament", "dog6origin");
dogList.addDog("dog7name", "dog7temperament", "dog7origin");
dogList.addDog("dog8name", "Sociable", "dog8origin");
dogList.addDog("dog9name", "dog9temperament", "dog9origin");

console.log(dogList.dogs);

module.exports = dogList;