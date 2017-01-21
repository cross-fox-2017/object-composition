const fs = require("fs")

class Cookie{
  constructor(nama,bahan){
    this.nama= nama
    this.bahan = bahan
  }
  bake(nama,jumlah){
    this.bahan.push (new Ingredients(nama,jumlah))
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

class Ingredients {
  constructor(nama,jumlah){
    this.nama = nama
    this.jumlah = jumlah
  }
}

function input(array){
  var nam=[]
  for(var j=0; j<array.length;j++){
    nam.push(array[j].split(' : '))
  }
  var x=[]
  var z=[]
  var o=[]
  for(var o=0;o<nam.length;o++){
    x.push(nam[o][0])
    z.push(nam[o][1])
  }
  var obj =[]
  for(var l=0;l<x.length;l++){
    obj.push(new Ingredients(z[l],x[l]))
  }
  return obj
}

class CookieFactory{
  constructor(){

    this.kumpulan=[]
  }

  create(options){
    var data = fs.readFileSync(options,'utf-8')
    var j= data.trim().split('\n');
    var k=[]
    var kue=[]
    var ing=[]
    var kom=[]
    var jum=[]

    for(var i=0; i<j.length;i++){
      k.push(j[i].split(' = '))
    }
    for(var i=0;i<k.length;i++){
      kue.push(k[i][0])
      ing.push(k[i][1])
    }
    for(var i=0;i<ing.length;i++){
      kom.push(ing[i].split(','))
    }

    for(var i=0; i< kue.length;i++){
      if(kue[i] === "peanut butter"){
        var j= input(kom[i])
        this.kumpulan.push(new PeanutButter(kue[i],j))
      }
      else if(kue[i] === "chocolate chip"){
        var j= input(kom[i])
        this.kumpulan.push(new ChocolateChip(kue[i],j))
      }
      else if(kue[i] === "chocolate cheese"){
        var j= input(kom[i])
        this.kumpulan.push(new ChocolateCheese(kue[i],j))
      }
      else if(kue[i] === "chocolate butter"){
        var j= input(kom[i])
        this.kumpulan.push(new ChocolateButter(kue[i],j))
      }
    }

    return this.kumpulan
  }

    tuesday(){
      for(var i =0; i < this.kumpulan.length;i++){
          for(var j=0;j< this.kumpulan[i].bahan.length;j++){

            if(this.kumpulan[i].bahan[j].nama === 'gluten free flour'){
                return this.kumpulan[i].nama
                }
          }

      }
  }
}
 let l= new CookieFactory
 console.log(JSON.stringify(l.create('cookies.txt')))
 console.log(l.tuesday())
