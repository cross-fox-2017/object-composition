"use strict"
const fs = require('fs')

class Cookie{
  constructor(name,ingredients){
    this.name= name
    this.ingredients = ingredients
  }
}

class Ingredients {
  constructor(name,amount){
    this.name = name
    this.amount = amount
  }
}

class PeanutButter extends Cookie {
  constructor(name,ingredients){
    super(name,ingredients)
  }
}

class ChocolateChip extends Cookie{
  constructor(name,ingredients){
    super(name,ingredients)
  }
}

class ChocolateCheese extends Cookie{
  constructor(name,ingredients){
    super(name,ingredients)
  }
}

class ChocolateButter extends Cookie{
  constructor(name,ingredients){
    super(name,ingredients)
  }
}

function cook(array){
  var num=[]
  for(var j=0; j<array.length;j++){
    num.push(array[j].split(' : '))
  }
  var getA=[]
  var getB=[]
  var getC=[]
  for(var o=0;o<num.length;o++){
    getA.push(num[o][0])
    getB.push(num[o][1])
  }
  var obj =[]
  for(var l=0;l<getA.length;l++){
    obj.push(new Ingredients(getB[l],getA[l]))
  }
  return obj
}

class CookieFactory{
  constructor(){
    this.results=[]
  }
  create(options){
    var recipes = fs.readFileSync(options,'utf-8').trim().split('\n');
    var recipesSplit=[]
    var cookies=[]
    var ingredients=[]
    var composition=[]

    for(var i=0; i<recipes.length;i++){
      recipesSplit.push(recipes[i].split(' = '))
    }
    for(var i=0;i<recipesSplit.length;i++){
      cookies.push(recipesSplit[i][0])
      ingredients.push(recipesSplit[i][1])
    }
    for(var i=0;i<ingredients.length;i++){
      composition.push(ingredients[i].split(','))
    }

    for(var i=0; i< cookies.length;i++){
      if(cookies[i] === "peanut butter"){
        var j= cook(composition[i])
        this.results.push(new PeanutButter(cookies[i],j))
      }
      else if(cookies[i] === "chocolate chip"){
        var j= cook(composition[i])
        this.results.push(new ChocolateChip(cookies[i],j))
      }
      else if(cookies[i] === "chocolate cheese"){
        var j= cook(composition[i])
        this.results.push(new ChocolateCheese(cookies[i],j))
      }
      else if(cookies[i] === "chocolate butter"){
        var j= cook(composition[i])
        this.results.push(new ChocolateButter(cookies[i],j))
      }
    }
     return this.results
  }

  // cookieRecommendation(){
  //   console.log( this.results.ingredients);
  // // for(let i = 0; i < this.results.length; i++){
  // //   for(let j = 0; j < this.results[i].ingredients.length; j++){
  // //     if(this.results[i].ingredients[j]['ingredients'] === 'gluten free flour'){
  // //       return this.results[i].name
  // //     }
  // //   }
  // // }
// }
}

let cookieFactory= new CookieFactory
console.log(JSON.stringify(cookieFactory.create('cookies.txt')))
