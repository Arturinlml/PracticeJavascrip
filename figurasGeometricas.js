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


//interaccion con HTML5 

function calcularAreaCuadrado () {
    //Obtenemos el valor del input
    const input = document.getElementById("inputLado")
    //convertimos el argumento en valor 

    const value = input.value;
    const areaCuadrado = cuadradoArea(value);
    alert(areaCuadrado);

}

function calcularPerimetroCuadrado () {
    //Obtenemos el valor del input
    const input = document.getElementById("inputLado")
    //convertimos el argumento en valor 

    const value = input.value;
    const perimetroCuadrado = cuadradoPerimetro(value);
    alert(perimetroCuadrado);
    
}