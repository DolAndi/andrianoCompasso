class Person {
    constructor(name) {
        this._name = name
    }
    get name() {
         return this._name }
    //set name(newName) {this._name = newName} // O SET PERMITE A ALTERAÇAO
}

const person = new Person ("Andriano Toazza")

person.name = "Fulano de tal"  //Não pode alterar o nome :D

console.log(person.name)