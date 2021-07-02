//figuras geometricas 

let cuadradoArea = (lado) =>  lado * lado;


let cuadradoPerimetro = (lado) =>  lado * 4;


let trianguloArea = (base, altura) => {
     (base * altura) / 2;
}

let trianguloPerimetro = (base, lado, lado2) => {
    return base + (lado * 2);
}

let circuloArea = (radio) => {
    let d = (radio * radio);
    const pi = Math.PI;
    return pi * d;
}

let circuloPerimetro = (radio) => {
    let r = radio;
    const pi = Math.PI;
    return (pi * 2) * r;
}

let areaCirculo = circuloArea(5)
let perimetroCirculo = circuloPerimetro(5);
let area = cuadradoArea(5);
let perimetro = cuadradoPerimetro(5);
let areaTriangulo = trianguloArea(5, 6);
let perimetroTriangulo = trianguloPerimetro(5, 6, 7);
console.log("el resultado del cuadrado es area: ", area +" perimetro: ", perimetro);
console.log("el resultado del circulo es area: ", areaCirculo +" perimetro: ", perimetroCirculo);
console.log("el resultado del Triangulo es area: ", areaTriangulo +" perimetro: ", perimetroTriangulo);


