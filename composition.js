var fs = require('fs')
var options = fs.readFileSync('cookies.txt').toString().trim().split("\r\n")


class Ingredient {
    constructor(options) {
        this.name = options['name']
        this.amount = options['amount']
    }
}

class Cookie {
    constructor(params) {
        this.nama = params['nama']
        this.ingredient = params['ingredient']
        this.status = "mentah"
    }
}

class PeanutButter extends Cookie {
    constructor(params) {
        super(params)
        this.peanut_count = 100
    }
}

class ChocholateChip extends Cookie {
    constructor(params) {
        super(params)
        this.choc_chip_count = 200
    }
}

class ChocholateCheese extends Cookie {
    constructor(params) {
        super(params)
        this.choc_chip_count = 300
    }
}

class ChocholateButter extends Cookie {
    constructor(params) {
        super(params)
        this.choc_chip_count = 400
    }
}



class CookieFactory {
    static create(cookies) {
        var kue = []
        var ingredient = []
        var dataIngredient = []
        var dataKue = []
        for (var i = 0; i < cookies.length; i++) {
            kue.push(cookies[i].replace(/=.+/g, "").trim())
            var ambil = cookies[i].match(/=.+/g)
            ingredient.push(ambil[0].replace(/=/g, "").trim());
        }
        for (var i = 0; i < ingredient.length; i++) {
            dataIngredient = []
            ingredient[i] = ingredient[i].toString().replace(/,/g, ":").split(":")
            for (var j = 0; j < ingredient[i].length; j++) {
                var tambahData = {
                    amount: ingredient[i][j++].trim(),
                    name: ingredient[i][j].trim()
                }
                dataIngredient.push(new Ingredient(tambahData))
            }
            if (kue[i] == "peanut butter") {
                var tambahKue = {
                    nama: kue[i],
                    ingredient: dataIngredient
                }
                dataKue.push(new PeanutButter(tambahKue))
            } else if (kue[i] == "chocolate chip") {
                var tambahKue = {
                    nama: kue[i],
                    ingredient: dataIngredient
                }
                dataKue.push(new ChocholateChip(tambahKue))
            } else if (kue[i] == "chocolate cheese") {
                var tambahKue = {
                    nama: kue[i],
                    ingredient: dataIngredient
                }
                dataKue.push(new ChocholateCheese(tambahKue))
            } else if (kue[i] == "chocolate butter") {
                var tambahKue = {
                    nama: kue[i],
                    ingredient: dataIngredient
                }
                dataKue.push(new ChocholateButter(tambahKue))
            }
        }
        return dataKue
    }

    static cookieRecommendation(day, batch_of_cookies) {
        var recomendasi = []
        for (var i = 0; i < batch_of_cookies.length; i++) {
            var status = true;
            for (var j = 0; j < batch_of_cookies[i].ingredient.length; j++) {
                if (batch_of_cookies[i].ingredient[j].name == "sugar") {
                    status = false;
                    break;
                }
            }
            if(status == true){
              recomendasi.push(batch_of_cookies[i])
            }
        }
        return recomendasi
    }

}




let batch_of_cookies = CookieFactory.create(options); // pada method diberi static contoh(){}, jika static panggilya cukup namaClassUtama.method()
console.log(batch_of_cookies);

let tuesdayFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("food for tuesday is :");
for (let i = 0; i < tuesdayFoods.length; i++) {
    console.log(tuesdayFoods[i].nama);
}
