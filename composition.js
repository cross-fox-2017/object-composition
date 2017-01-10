"use strict"

let fs = require("fs");

class Ingredients {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Cookies {
  constructor(name, item = []) {
    this.cookieName = name;
    this.ingredients = item;
  }
}

class CookiesFactory {
  constructor() {
    this.cookies = null;
  }

  static create (file) {
    let data = fs.readFileSync(file, "utf8");
    let editData = data.split("\n");
    editData.pop();
    let forIng = data.replace(/([a-zA-Z]+) ([a-zA-Z]+ =)/g,"").split("\n");
    forIng.pop();
    let ingName = [];
    let ingVal = [];
    for (let i = 0; i < forIng.length; i++) {
      ingName.push(forIng[i].match(/(\d [a-zA-Z]+)/g));
      ingVal.push(forIng[i].replace(/(\d [a-zA-Z]+)/g,"").replace(/[:\s]+/g,"").split(","));
    }
    let fileData = [];
    for (let i = 0; i < editData.length; i++) {
      let cookie = new Cookies();
      cookie.cookieName = editData[i].split("=")[0].trim();
      for (let j = 0; j < ingName[i].length; j++) {
        let ingred = new Ingredients();
        ingred.name = ingVal[i][j];
        ingred.value = ingName[i][j];
        cookie.ingredients.push(ingred);
      }
      fileData.push(cookie);
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
        // console.log(array[i]["ingredients"]);
        // console.log(array[i]);
      }
      return sweetCookies
    }
  }
}

let batch_of_cookies = CookiesFactory.create('cookies.txt');
// console.log(batch_of_cookies);

let tuesdayFoods = CookiesFactory.cookieRecommendation("tuesday", batch_of_cookies);
// console.log(`Cookies that has sugar in it: ${JSON.stringify(tuesdayFoods)}`);
for(let i = 0; i < tuesdayFoods.length; i++){
  console.log(`Cookies that has sugar in it: ${tuesdayFoods[i].cookieName}`);
}
