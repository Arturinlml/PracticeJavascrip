//calculators
let coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

let calcDiscount = (price, discount) =>  price * ((100 - discount)*0.01);

let validateCuppon = (cupponName) => {
    let search = cupponName;
   // let final = coupons.includes(search)
    //console.log(search);
    //if (coupons.includes(search)){
        for(let c = 0; c < coupons.length; c++ ){
            if(coupons[c].name == search){
                console.log(coupons[c].name)
                return c;                
            }            
        }
        
   // }
}
//interaccion con HTML5 

function calcular () {
    //Obtenemos el valor del input
    const inputV = document.getElementById("inputPrecio")
    const inputC = document.getElementById("inputCuppon")
    //convertimos el argumento en valor 
    const valuePrice =  Number(inputV.value);
    const valueCuppon = (inputC.value);
    //const resultadoF = document.getElementById("resultado")
    //const validacionC = document.getElementById("validacion")
    //Calculos 

    const cupponValid = validateCuppon(valueCuppon);
    console.log("chequeo " +cupponValid);
    if(cupponValid >= 0){
        console.log(coupons[cupponValid].name)
        const discountFinalC = calcDiscount(valuePrice, coupons[cupponValid].discount);
        resultado.innerText = "El precio con descuento aplicado es: $" +discountFinalC;
    } else {
        console.log("Cupón inválido");
        const discountFinalSC = calcDiscount(valuePrice, 0);
        resultado.innerText = "El precio sin descuento es: $" +discountFinalSC;
        validacion.innerText = "El cupon es inválido";
            }

     
    
    
    //alert(discountFinal);

}
