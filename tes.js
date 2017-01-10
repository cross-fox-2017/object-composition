"use strict"

const fs = require('fs');

let cookieList = fs.readFileSync('cookies.txt', 'utf-8').trim().split("\n")

let kue = []
let allBahan = []

for (let i = 0; i < cookieList.length; i++) {
  let ambil = cookieList[i].match(/^\w+\s\w+/g).toString()
  let ambil2 = cookieList[i].replace(/^\w+\s\w+.=/g,"")
  allBahan.push(ambil2)
  kue.push(ambil)
}

let bahan = []
for (let i = 0; i < allBahan.length; i++) {
  let ambil = allBahan[i].split(',');
  bahan.push(ambil)
}
let newBahan = []
for (var i = 0; i < bahan.length; i++) {
  let arr = []
  newBahan.push(arr)
  for (var j = 0; j < bahan[i].length; j++) {
    newBahan[i].push(bahan[i][j].replace(/^\s/,''))
  }
}

let jumlah = [];

// for (var i = 0; i < newBahan.length; i++) {
//   jumlah.push(newBahan[i].split(' : '))
// }

for (var i = 0; i < newBahan.length; i++) {
  let arr = []
  jumlah.push(arr);
  for (var j = 0; j < newBahan[i].length; j++) {
    jumlah[i].push(newBahan[i][j].trim().split(' : '));
  }
}

console.log(kue);
console.log(newBahan);
console.log(jumlah)


class Cookie {
  constructor(nama, jumlah, bahan) {

  }
}

// Class nama Kue
class PeanutButter extends Cookie {
  constructor() {
    super()
    this.bahan = bahan[0];

  }
  bake(){
    super.bake()
  }
}

class ChocolateChip extends Cookie {
  constructor() {
    super()
  }
  bake(){
    super.bake()
  }
}

class ChocolateCheese extends Cookie {
  constructor() {
    super()
  }
  bake(){
    super.bake()
  }
}

class ChocolateButter extends Cookie {
  constructor() {
    super()
  }
  bake(){
    super.bake()
  }
}




class Ingredients {
  constructor() {
    this.nama = []
    this.jumlah = []
  }
}



class CookieFactory {
  constructor() {
    this.data = [];
  }

  static create(filename){

  }
}

CookieFactory.create('cookies.txt');

// let batch_of_cookies = CookieFactory.create(options);
// console.log(batch_of_cookies.inspect)
