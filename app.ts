// string
let nome = 'igor';
// nome = 28;

// number
let idade = 37;
// idade = 'igor';

// boolean
let temEsporte: boolean = true;
// temEsporte = 'jiu jitsu';

// assign types
let dataNacimento: any;
dataNacimento = 1980;
dataNacimento = '1980';

// array
let linguagens: any[] = ['rails', 'angular'];
linguagens = [2];
// linguagens = 2;

// tuples
let endereco = ["rua tal", 1415];

// enum
enum Color {Amarelo, Vermelho, Azul}

let minaCor: Color = Color.Azul;
console.log(minaCor);

// any
let car: any = "BMW";
car = {type: 'BWM'};

// string
function returnMeuNome(): string {
    return nome;
}

console.log(returnMeuNome());

// void
function ola(): void {
    console.log('ola');
}

// params
function multiplicar(n1: number, n2: number): number {
    return n1 * n2;
}

console.log(multiplicar(2, 3));

// function types
let myFunction: (a: number, b: number) => number;
// myFunction = ola;
// myFunction();
myFunction = multiplicar;
console.log(myFunction(3, 3));

// objects
let userData: { name: string, age: number } = {
    name: "IGOR",
    age: 37
};
// userData = {
//     a: "hello",
//     b: 22
// };
console.log(userData);

// complex object
let complexo1: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

type Complex = { data: number[], output: (all: boolean) => number[] };

let complexo2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
console.log(complexo2);

// union types
let myRealAge: number | string;
myRealAge = 36;
// myRealAge = '36';
console.log(myRealAge);

// check types
let finalValue = 30;
if(typeof  finalValue == "number") {
    console.log("Final value is a number");
}

// never
function neverReturns():never {
    throw new Error("An error")
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
console.log(canBeNull);