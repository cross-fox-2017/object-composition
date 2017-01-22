'use strict'

const fs = require("fs")

class Cookie {
  constructor(name, ingredients) {
    this.name        = name;
    this.ingredients = ingredients;
    // this.status = 'Mentah';
  }

  bake(name, count) {
    this.ingredients.push(new Ingredient(name, count))
    // this.status = 'Selesai dimasak';
  }
}

class PeanutButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    // this.peanut_count = 100;
  }
}

class ChocolateChip extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    // this.choc_chip_count = 200;
  }
}

class BananaChocolate extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
  }
}

class StrawberryChocolate extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
  }
}

class Ingredient {
  constructor(name, count) {
    this.name  = name;
    this.count = count;
  }
}

function inputArr(array) {
  var temp = [];
  for(var i = 0; i < array.length; i++) {
    temp.push(array[i].split(' : '))
  }

  var j = [];
  var k = [];
  var l = [];
  for(var l = 0; temp.length; l++) {
    j.push(temp[l][0])
    k.push(temp[l][1])
  }

  var objectArr = [];
  for(var m = 0; m < j.length; m++) {
    objectArr.push(new Ingredient(k[m], j[m]))
  }
  return objectArr
}

class CookieFactory {
  constructor() {
    this.allArray = [];
  }

  create(options) {
    const fs    = require('fs')

    let file    = fs.readFileSync(options, 'UTF-8')
    let x       = file.trim().split("\n");
    let o       = [];
    let cakes   = [];
    let ingred  = [];
    let compose = [];
    let counts  = [];

    for(var p = 0; p < x.length; p++) {
      o.push(n[p].split(' = '))
    }

    for(var p = 0; p < o.length; p++) {
      cakes.push(o[p][0])
      ingred.push(o[p][1])
    }

    for(var p = 0; p < ingred.length; p++) {
      compose.push(ingred[p].split(','));
    }

    for(var p = 0; p < cakes.length; p++){
      if(cakes[p] === "Peanut Butter") {
        var x = inputArr(compose[p])
        this.allArray.push(new PeanutButter(cakes[p],x))
      }

      else if(cakes[p] === "Chocolate Chip") {
        var x = inputArr(compose[p])
        this.allArray.push(new ChocolateChip(cakes[p], x))
      }

      else if(cakes[p] === "Banana Chocolate") {
        var x = inputArr(compose[p])
        this.allArray.push(new BananaChocolate(cakes[p], x))
      }

      else if(cakes[p] === "Strawberry Chocolate") {
        var x = inputArr(compose[p])
        this.allArray.push(new StrawberryChocolate(cakes[p], x))
      }
      return this.allArray
    }
  }
    tuesday() {
      for(var p = 0; p < this.allArray.length; p++) {
        for(var o = 0; this.allArray.length; o++) {
          if(this.allArray[p].ingredients[x].name === 'Gluten free flour') {
            return this.allArray[p].name;
          }
        }
      }
    }
  }

let q = new CookieFactory
console.log(JSON.stringify(q.create('cookies.txt')));
console.log(q.tuesday());
