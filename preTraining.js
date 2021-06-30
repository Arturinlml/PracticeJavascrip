function nombreCompleto (nombres, apellidos, nickname){
    const completeName = nombres + " " + apellidos;
    return console.log(completeName + " NickName: " + nickname);
}

nombreCompleto("Luis Arturo", "Sanchez Gonzalez", "R2D2");


const tipoDeSuscripcion = "Basic";

   if (tipoDeSuscripcion == "Free"){
     console.log("Solo puedes tomar los cursos gratis");     
   } else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
   } else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
   } else if (tipoDeSuscripcion == "Expert+") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");  
   }

 //ejercicio 2.1

function messageOfWarning (pos){
    let index = pos;
    let messagesOfMembershipsInfo = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    return console.log(messagesOfMembershipsInfo[index]);
}

const typeOfMembership = ["Free", "Basic", "Expert", "Expert+"];
const  typeOfSubscription = "Expert";

const index = typeOfMembership.indexOf(typeOfSubscription);
if (index <0 ){
    console.log("El plan no existe");
} else 
    messageOfWarning(index);

//ejercicio 3
let bandera = 1;

while(bandera === 1){
    console.log("introduce la respuesta de 2 + 2, si respondes mal esto continuara hasta que aciertes: ")
    let resultado = prompt("Resultado = " );
        (resultado == 4)
            ? bandera = 2
            : bandera = 1
}

//Ejercicio 4 
function reciveList (list){
    let n = 0;
    while( n < list.length){
        console.log(list[n])
        n++;    
    }
    
}
function recieveObject (carro){
    let n = 0;
    for (const property in carro){
        console.log(`carro.${property} = ${carro[property]}`);
    }
}

let carro = {
     make: 'Ford',
     type: 'Focus',
     year: '2016'
};
let list = ["Manzana", "Pera", "Sandia"];
reciveList(list);
recieveObject(carro);


       