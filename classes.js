class Car {
    constructor(marca, preco) {
        this.marca = marca
        this.preco = preco
    }

    run(){
        console.log("correr")
    }
}

const civic = new Car("honda", 130)

console.log(civic.marca)
civic.run()