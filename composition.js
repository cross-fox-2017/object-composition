"use strict"
const fs = require('fs')

class Cookie{
  constructor(nama,bahan){
    this.nama= nama
    this.bahan = bahan
  }
  bake(nama,jumlah){
    this.bahan.push (new Ingredients(nama,jumlah))
  }
}

class Ingredients {
  constructor(nama,jumlah){
    this.nama = nama
    this.jumlah = jumlah
  }
}

class PeanutButter extends Cookie {
  constructor(nama,bahan){
    super(nama,bahan)
  }

}

class ChocolateChip extends Cookie{
  constructor(nama,bahan){
    super(nama,bahan)
  }
}

class ChocolateCheese extends Cookie{
  constructor(nama,bahan){
    super(nama,bahan)
  }
}

class ChocolateButter extends Cookie{
  constructor(nama,bahan){
    super(nama,bahan)
  }
}

function ingrd(arr){
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
    obj.push(new Ingredients(j[l],i[l]))
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
    let k=[], kukis=[], ing=[], compos=[]

    for(let i=0; i<data.length;i++){
      k.push(data[i].split(' = '))
    }
    for(let i=0;i<k.length;i++){
      kukis.push(k[i][0])
      ing.push(k[i][1])
    }
    for(let i=0;i<ing.length;i++){
      compos.push(ing[i].split(','))
    }

    for(let i=0; i< kukis.length;i++){
      if(kukis[i] === "peanut butter"){
        let data= ingrd(compos[i])
        this.allCook.push(new PeanutButter(kukis[i],data))
      }
      else if(kukis[i] === "chocolate chip"){
        let data= ingrd(compos[i])
        this.allCook.push(new ChocolateChip(kukis[i],data))
      }
      else if(kukis[i] === "chocolate cheese"){
        let data= ingrd(compos[i])
        this.allCook.push(new ChocolateCheese(kukis[i],data))
      }
      else if(kukis[i] === "chocolate butter"){
        let data= ingrd(compos[i])
        this.allCook.push(new ChocolateButter(kukis[i],data))
      }
  }
   return this.allCook
  }
}

let kueh= new CookieFactory
console.log(kueh.create('cookies.txt'))
console.log(JSON.stringify(kueh.create('cookies.txt')))
