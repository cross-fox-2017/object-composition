"use strict"

const fs = require('fs');

class Cookie {
  constructor(nama, bahan) {
    this.nama = nama
    this.bahan = bahan
    this.status = 'mentah'
  }
  bake() {
    this.status = 'Sudah dimasak'
  }
}

// Class nama Kue
class PeanutButter extends Cookie {
  constructor(nama, bahan) {
    super(nama, bahan)
    this.peanut_count = 100
  }
  bake() {
    super.bake()
  }
  ingredients() {
    this.bahan.push(new Ingredients(nama,jumlah))
  }
}

class ChocolateChip extends Cookie {
  constructor(nama, bahan) {
    super(nama, bahan)
    this.chocolate_chip_count = 150
  }
  bake() {
    super.bake()
  }
  ingredients() {
    this.bahan.push(new Ingredients(nama,jumlah))
  }
}

class ChocolateCheese extends Cookie {
  constructor(nama, bahan) {
    super(nama, bahan)
    this.cheese_count = 200
  }
  bake() {
    super.bake()
  }
  ingredients() {
    this.bahan.push(new Ingredients(nama,jumlah))
  }
}

class ChocolateButter extends Cookie {
  constructor(nama, bahan) {
    super(nama, bahan)
    this.chocolate_butter_count = 120
  }
  bake() {
    super.bake()
  }
  ingredients() {
    this.bahan.push(new Ingredients(nama,jumlah))
  }
}

let chocolateCheese = new ChocolateCheese();
chocolateCheese.bake();

class Ingredients {
  constructor(bahan, komposisi) {
    this.bahan = bahan
    this.komposisi = komposisi
  }
}


class CookieFactory {
  constructor() {
    this.cookies = [];
  }

  create(filename){
    let cookieList = fs.readFileSync(filename, 'utf-8').trim().split("\n")
    let get = [];
    let nama = [];
    let component = [];
    let value = []
    let jumlah = [];
    let bahan = []

    for (let i = 0; i < cookieList.length; i++) {
      get.push(cookieList[i].split(' = '))
      component.push(get[i][1].split(', '));
      nama.push(get[i][0])
      let arr = []
      value.push(arr)
      let arr2 = []
      jumlah.push(arr2)
      let arr3 = []
      bahan.push(arr3)
      for(let j = 0; j < component[i].length; j++){
        value[i].push(component[i][j].split(' : '))
        jumlah[i].push(value[i][j][0]);
        bahan[i].push(value[i][j][1])
      }
    }   

    let ingredients = [];
    for(let i = 0; i < bahan.length; i++){
      let arr = []
      ingredients.push(arr);
      for (let j = 0; j < bahan[i].length; j++) {
        ingredients[i].push({
          bahan: bahan[i][j],
          komposisi: jumlah[i][j]
        })
      }
    }

    for(let i = 0; i < nama.length; i++){
      if(nama[i] === "peanut butter"){
        this.cookies.push(new PeanutButter(nama[i], ingredients[i]))
      } else if(nama[i] === "chocolate chip"){
        this.cookies.push(new ChocolateChip(nama[i], ingredients[i]))
      } else if(nama[i] === "chocolate cheese"){
        this.cookies.push(new ChocolateCheese(nama[i], ingredients[i]))
      } else if(nama[i] === "chocolate butter"){
        this.cookies.push(new ChocolateButter(nama[i], ingredients[i]))
      }
    }
    return this.cookies
  }

  // Cari Bahan yang gluten free
  cookieRecommendation(){
    for(let i = 0; i < this.cookies.length; i++){
      for(let j = 0; j < this.cookies[i].bahan.length; j++){
        if(this.cookies[i].bahan[j]['bahan'] === 'gluten free flour'){
          return this.cookies[i].nama
        }
      }
    }  
  }

}


let cookieFactory = new CookieFactory();
let batch_of_cookies = cookieFactory.create('cookies.txt');
console.log(batch_of_cookies);

let tuesdayFoods = cookieFactory.cookieRecommendation();
console.log("food for tuesday is :");
console.log(tuesdayFoods)
// for(let i = 0; i < tuesdayFoods.length; i++){
//   console.log(tuesdayFoods[i].name);
// }
