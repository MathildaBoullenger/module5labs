class CatList {
    constructor() {
      this.cats = [];
    }
  
    addCat(name, temperament, origin) {
      this.cats.push({ name, temperament, origin });
    }
  }

var catList = new CatList();

catList.addCat('cat1name', 'cat1temperament', 'cat1origin');
catList.addCat('cat2name', '"Playful"', 'cat2origin');
catList.addCat('cat3name', 'cat3temperament', 'cat3origin');
catList.addCat('cat4name', 'cat4temperament', 'cat4origin');
catList.addCat('cat5name', '"Patient"', 'cat5origin');
catList.addCat('cat6name', 'cat6temperament', 'cat6origin');
catList.addCat('cat7name', 'cat7temperament', 'cat7origin');
catList.addCat('cat8name', 'Loyal', 'cat8origin');
catList.addCat('cat9name', 'cat9temperament', 'cat9origin');

console.log(catList.cats);

module.exports = catList;

