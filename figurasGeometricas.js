//figuras geometricas 

let cuadradoArea = (lado) =>  lado * lado;


let cuadradoPerimetro = (lado) =>  lado * 4;


let trianguloArea = (base, lado, lado2) =>  {
   const s = (base + lado + lado2)/2;
   return Math.sqrt(s*(s - base)*(s - lado)*(s - lado2))
}


let trianguloPerimetro = (base, lado, lado2) =>  (base + lado + lado2);


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

function calcularPerimetroTriangulo () {
    //Obtenemos el valor del input
    const inputH = document.getElementById("inputBase")
    const input2 = document.getElementById("inputLado1")
    const input3 = document.getElementById("inputLado2")
    //convertimos el argumento en valor 
    const valueH = Number(inputH.value) ;
    const valueL1 = Number(input2.value);
    const valueL2 = Number(input3.value);
    if(valueL1 != valueL2){
        alert('Tu triangulo no es isóceles')
    }else {
        const resultado = trianguloPerimetro(valueH, valueL1, valueL2)
        alert(resultado);  
    }  
}


function calcularAreaTriangulo () {
    const inputH = document.getElementById("inputBase")
    const input2 = document.getElementById("inputLado1")
    const input3 = document.getElementById("inputLado2")
    //convertimos el argumento en valor 
    const valueH = Number(inputH.value) ;
    const valueL1 = Number(input2.value);
    const valueL2 = Number(input3.value);
    if(valueL1 != valueL2){
        alert('Tu triangulo no es isóceles')
    }else {
        const resultadoT = trianguloArea(valueH, valueL1, valueL2)
        alert(resultadoT);    
    }  
}

function calcularAreaCirculo () {
    //Obtenemos el valor del input
    const inputR = document.getElementById("inputRadio")
    //convertimos el argumento en valor 
    const valueR = Number(inputR.value);
    const resultadoCirculo = circuloArea(valueR)
    alert(resultadoCirculo);
    
}

function calcularPerimetroCirculo () {
    //Obtenemos el valor del input
    const inputR = document.getElementById("inputRadio")
    //convertimos el argumento en valor 
    const valueR = Number(inputR.value);
    const resultadoCirculo = circuloPerimetro(valueR)
    alert(resultadoCirculo);
    
}