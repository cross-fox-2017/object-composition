"use strict"

const fs = require('fs')

class Cookie {
  constructor(){
    this.status = 'mentah'
  }

  bake(ing){
    let ingredients = []
    ing = ing.toString().split(',')
    for (var i = 0; i < ing.length; i++) {
      ing[i] = ing[i].split(" : ")
      ingredients.push(new Composition(ing[i][1], ing[i][0]))
    }
    return ingredients
  }
}

class PeanutButter extends Cookie {
  constructor(bahan) {
    super(bahan)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(bahan){
    super(bahan)
    this.choc_chip_count = 200
  }
}

// class RainbowCake extends Cookie {
//   constructor() {
//     this.rainbow_count = 300
//   }
// }

class ChocolateCheese extends Cookie{
  constructor(bahan) {
    super(bahan)
    this.cheese_count = 80
  }
}
class ChocolateButter extends Cookie{
  constructor(bahan) {
    super(bahan)
    this.butter = 120
  }
}

class Composition {
  constructor(name, total) {
    this.name = name
    this.total = total
  }
}

class CookiesFactory {
  constructor(file) {
      this.list = fs.readFileSync(file, 'UTF-8').trim().split('\n')
      this.cookies = []
  }

  cook(){
    let make = []
    for (var i = 0; i < this.list.length; i++) {
      this.list[i] = this.list[i].trim().split(' = ')
      this.list[i][1] = this.list[i][1].trim().split(", ")

      let a = this.list[i][0]
      let bahan = this.list[i][1]
      if (a == 'peanut butter')
        make.push(new PeanutButter(bahan))
      else if (a == 'chocolate chip')
        make.push(new ChocolateChip(bahan))
      else if (a == 'chocolate cheese')
        make.push(new ChocolateCheese(bahan))
      else if (a == 'chocolate butter')
        make.push(new ChocolateButter(bahan))
      else
        make.push(new Cookie(bahan))
    }
    return this.cookies = make
  }
}

  let test = new CookiesFactory('cookies.txt')
  let batchOfCookies = test.cook()
  console.log(batchOfCookies);
