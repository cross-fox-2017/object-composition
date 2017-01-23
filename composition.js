var fs = require('fs')

class Ingredients {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Cookies {
  constructor(name, items = []) {
    this.cookieName = name;
    this.ingredients = items;
  }
}

class CookiesFactory {
  constructor() {
    this.cookies = null;
  }

  static create (file) {
    let data = fs.readFileSync(file, "utf8");
    let dataCookie = data.split("\n");
    dataCookie.pop();
    let forIngridients = data.replace(/([a-zA-Z]+) ([a-zA-Z]+ =)/g,"").split("\n");
    forIngridients.pop();
    let ingName = [];
    let ingVal = [];
    for (let i = 0; i < forIngridients.length; i++) {
      ingName.push(forIngridients[i].match(/(\d [a-zA-Z]+)/g));
      ingVal.push(forIngridients[i].replace(/(\d [a-zA-Z]+)/g,"").replace(/[:\s]+/g,"").split(","));
    }

    let fileData = [];
    for (let i = 0; i < dataCookie.length; i++) {
      let cookie = new Cookies();
      cookie.cookieName = dataCookie[i].split("=")[0].trim();
      for (let j = 0; j < ingName[i].length; j++) {
        let ingred = new Ingredients();
        ingred.value = ingName[i][j];
        ingred.name = ingVal[i][j];
        cookie.ingredients.push(ingred);
      }
      fileData.push(cookie)
    }
     this.cookies = fileData;

    if (this.cookies) {
      return this.cookies;
    }
  }


  static cookieRecommendation(string, array) {
    let sweetCookies = [];
    if (string.toLowerCase() == "tuesday") {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i]["ingredients"].length; j++) {
          if (array[i]["ingredients"][j].name == "sugar") {
            sweetCookies.push(array[i]);
          }
        }
      }
      return sweetCookies
    }
  }
}

let batch_of_cookies = CookiesFactory.create('cookies.txt');
console.log(JSON.stringify(batch_of_cookies));

let tuesdayFoods = CookiesFactory.cookieRecommendation("tuesday", batch_of_cookies);
for(let i = 0; i < tuesdayFoods.length; i++){
  console.log(`Cookies that has sugar in it: ${tuesdayFoods[i].cookieName}`);
}
