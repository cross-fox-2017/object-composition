"use strict"
const fs = require('fs')

class Cookie{
  constructor(bahan){
    this.bahan = this.olah(bahan)
  }
  olah(bahan){
    let bahanbaku = []
    bahan = bahan.toString().split(",");
    for (let i = 0; i < bahan.length; i++){
      bahan[i] = bahan[i].split(" : ")
      bahanbaku.push(new Inggridient(bahan[i][1], bahan[i][0]))
    }
    return bahanbaku
  }
}

class PeanutButter extends Cookie {
  constructor(bahan) {
    super(bahan)
    this.peanut_count = 150
  }
}
class ChocolateChip extends Cookie{
  constructor(bahan) {
    super(bahan)
    this.choco_count = 200
  }
}
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

class Inggridient{
  constructor(name, amount){
    this.name = name
    this.amount = amount
  }
}

class CookieFactory{
  constructor(file){
    this.file = fs.readFileSync(file, 'utf8').trim().split("\n")
    this.options = []
    this.product = [];
    this.sugarCek = [];
  }
  processFile(){
    for (let i = 0; i < this.file.length; i++){
      this.file[i] = this.file[i].trim().split(" = ")
      this.file[i][1] = this.file[i][1].trim().split(", ")
    }
    return this.options = this.file
  }
  createFromList(){
    let production = []
    for (let i = 0; i < this.file.length; i++){
      this.file[i] = this.file[i].trim().split(" = ")
      this.file[i][1] = this.file[i][1].trim().split(", ")
    }
    for (let i = 0; i < this.file.length; i++){
      let cari = this.file[i][0]
      let bahan = this.file[i][1]
      switch (cari){
        case 'peanut butter':
          production.push(new PeanutButter(bahan))
          break;
        case 'chocolate chip':
          production.push(new ChocolateChip(bahan))
          break;
        case 'chocolate cheese':
          production.push(new ChocolateCheese(bahan))
          break;
        case 'chocolate butter':
          production.push(new ChocolateButter(bahan))
          break;
        default:
          production.push(new Cookie(bahan))
      };
    }
    return this.product = production
  }
  inggridientCheck(){
    for (let i = 0; i < this.product.length; i++){
      for (let j = 0; j < this.product[i].bahan.length; j++){
        if (this.product[i].bahan[j].name == 'sugar'){
          this.sugarCek.push(this.product[i])
          break;
        }
      }
    }
    return `This Product ${this.sugarCek} has sugar on it, Not Recomended`
  }

}

let fact = new CookieFactory('recipes.txt')
let batchOfCookies = fact.createFromList()
// fact.processFile()
// console.log(fact.options);
console.log(batchOfCookies);
console.log(fact.inggridientCheck());
