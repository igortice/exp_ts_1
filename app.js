"use strict";
// string
var nome = 'igor';
// nome = 28;
// number
var idade = 37;
// idade = 'igor';
// boolean
var temEsporte = true;
// temEsporte = 'jiu jitsu';
// assign types
var dataNacimento;
dataNacimento = 1980;
dataNacimento = '1980';
// array
var linguagens = ['rails', 'angular'];
linguagens = [2];
// linguagens = 2;
// tuples
var endereco = ["rua tal", 1415];
// enum
var Color;
(function (Color) {
    Color[Color["Amarelo"] = 0] = "Amarelo";
    Color[Color["Vermelho"] = 1] = "Vermelho";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
var minaCor = Color.Azul;
console.log(minaCor);
// any
var car = "BMW";
car = { type: 'BWM' };
// string
function returnMeuNome() {
    return nome;
}
console.log(returnMeuNome());
// void
function ola() {
    console.log('ola');
}
// params
function multiplicar(n1, n2) {
    return n1 * n2;
}
console.log(multiplicar(2, 3));
// function types
var myFunction;
// myFunction = ola;
// myFunction();
myFunction = multiplicar;
console.log(myFunction(3, 3));
// objects
var userData = {
    name: "IGOR",
    age: 37
};
// userData = {
//     a: "hello",
//     b: 22
// };
console.log(userData);
// complex object
var complexo1 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complexo2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complexo2);
// union types
var myRealAge;
myRealAge = 36;
// myRealAge = '36';
console.log(myRealAge);
// check types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error("An error");
}
// nullable types
var canBeNull = 12;
canBeNull = null;
console.log(canBeNull);
