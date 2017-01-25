"use strict"

const fs = require('fs');

class Cookies {
  constructor(name, ingredient) {
    this.name = name
    this.ingredient = ingredient
  }
  bake(){
    this.ingredient.push(new Ingredient(name, total))
  }
}

class Ingredient {
  constructor(name, total) {
    this.name = name
    this.total = total
  }
}

class PeanutButter extends Cookies {
  constructor(name, ingredient) {
    super(name, ingredient)
  }
}

class ChocolateChip extends Cookies {
  constructor(name, ingredient) {
    super(name, ingredient)
  }
}

class ChocolateCheese extends Cookies {
  constructor(name, ingredient) {
    super(name, ingredient)
  }
}

class ChocolateButter extends Cookies {
  constructor(name, ingredient) {
    super(name, ingredient)
  }
}


function cook(arr){
  let ing=[]
  for(let i=0; i<arr.length;i++){
    ing.push(arr[i].split(' : '))
  }
  let i=[], j=[], k=[]
  for(let k=0;k<ing.length;k++){
    i.push(ing[k][0])
    j.push(ing[k][1])
  }
  let obj =[]
  for(let l=0;l<i.length;l++){
    obj.push(new Ingredient(j[l],i[l]))
  }
  return obj
}

class CookieFactory{
  constructor(){
    this.allCook=[]
  }
  create(file){
    const fs = require('fs')
    let data = fs.readFileSync(file,'utf-8')
    data = data.trim().split('\n');
    let k=[], cookies=[], ing=[], compos=[]

    for(let i=0; i<data.length;i++){
      k.push(data[i].split(' = '))
    }
    for(let i=0;i<k.length;i++){
      cookies.push(k[i][0])
      ing.push(k[i][1])
    }
    for(let i=0;i<ing.length;i++){
      compos.push(ing[i].split(','))
    }

    for(let i=0; i< cookies.length;i++){
      if(cookies[i] === "peanut butter"){
        let data= cook(compos[i])
        this.allCook.push(new PeanutButter(cookies[i],data))
      }
      else if(cookies[i] === "chocolate chip"){
        let data= cook(compos[i])
        this.allCook.push(new ChocolateChip(cookies[i],data))
      }
      else if(cookies[i] === "chocolate cheese"){
        let data= cook(compos[i])
        this.allCook.push(new ChocolateCheese(cookies[i],data))
      }
      else if(cookies[i] === "chocolate butter"){
        let data= cook(compos[i])
        this.allCook.push(new ChocolateButter(cookies[i],data))
      }
  }
   return this.allCook
  }
}

let cake = new CookieFactory
console.log(JSON.stringify(cake.create('cookies.txt')))
