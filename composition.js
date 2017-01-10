"use strict"
const fs = require('fs')

class Cookie{
  constructor(){
    this.status = 'mentah'
  }
  bake(){
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookie {
  constructor(status) {
    super(status)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie{
  constructor(status) {
    super(status)
    this.choc_chip_count = 200
  }
}

class CookieFactory{
  constructor(){
    this.options = fs.readFileSync('cookies.txt', 'utf8').split("\n")
  }
  create(){
    return this.options;
  }
}

let fact = new CookieFactory()
let batchOfCookies = fact.create()
let chips = new ChocolateChip()
console.log(chips.status);
console.log(fact.options);
