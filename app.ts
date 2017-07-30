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
    return n1*n2;
}

console.log(multiplicar(2, 3));

// function types
let myFunction: (a: number, b: number) => number;
// myFunction = ola;
// myFunction();
myFunction = multiplicar;
console.log(myFunction(3,3));