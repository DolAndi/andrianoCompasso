class Veiculos {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log("acelerou")
    }
}
class Moto extends Veiculos {  //extends traz as heranças da "classe mãe(veiculos)"
    empinar() {
        console.log("empinou")
    }
}
const bross = new Moto()

bross.acelerar()