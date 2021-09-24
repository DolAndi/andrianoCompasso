var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22]
var par = []
var resultado = 0 

for (var count = 0; count <= x.length - 1; count++) {
    if(x[count]% 2 == 0) {
        par.push(x[count])
    }
}

for (var count = 0; count <= par.length - 1; count++) {
    resultado += par [count]
    
}

console.log(resultado / par.length)