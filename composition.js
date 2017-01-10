"use strict"
const fs = require('fs')

class Cookie{
  constructor(inggridient){
    this.status = 'Matang'
    this.inggridient = inggridient
    this.sugar = 200
    this.cinnamon = 50
  }
}

class PeanutButter extends Cookie {
  constructor(status, sugar, cinnamon) {
    super(status, sugar, cinnamon)
    this.peanut_count = 100
    this.sugar = 250
    this.cinnamon = 20
  }
}

class ChocolateChip extends Cookie{
  constructor(status, sugar, cinnamon) {
    super(status, sugar, cinnamon)
    this.choc_chip_count = 200
    this.sugar = 100
    this.cinnamon = 0
  }
}

class Inggridient{
  constructor(options){
    this.name = options['name']
    this.amount = options['amount']
    this.has_gluten = options['has_gluten']
  }
}

class CookieFactory{
  constructor(){
    this.options = fs.readFileSync('cookies.txt', 'utf8').split("\n");
    this.product = [];
    this.sugarCek = 0;
    this.cinnanmonCek = 0;
  }
  createFromList(){
    let production = []
    this.options.forEach(function(val){
      switch (val) {
        case 'PeanutButter':
          production.push(new PeanutButter())
          break;
        case 'ChocolateChip':
          production.push(new ChocolateChip())
        default:
          production.push(new Cookie())
      };
    });
    return this.product = production
  }
  inggridientCheck(){
    let that = this
    this.product.forEach(function(val){
      that.sugarCek += val.sugar
      that.cinnanmonCek += val.cinnamon
    })
    return `This list have ${this.sugarCek} gr of sugar, and ${this.cinnanmonCek} gr of cinnamon`
  }

}

let fact = new CookieFactory()
let batchOfCookies = fact.createFromList()
// console.log(fact.options);
console.log(batchOfCookies);
console.log(fact.inggridientCheck( ));
