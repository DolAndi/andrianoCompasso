// o "this" não pode ser usado pra arrow function e faz referencia ao proprio escopo
function Car(marca, preco){
    this.marca = marca
    this.preco = preco
}

const civic = new Car("honda", 130)
const fusca = new Car("fusca", 40)

console.log(civic)
console.log(fusca)

// o "new" chama a função construtora