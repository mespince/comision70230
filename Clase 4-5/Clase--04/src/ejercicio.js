/* Ejercicio en Clase */
import moment from "moment";

const fechaActual = moment();
// constante que almacena la fecha actual

const fechaNac = moment("1995-03-07");
// Constante de fecha de nac.

if(fechaNac.isValid()){
    let diasPasados = fechaActual.diff(fechaNac, "days");
    console.log(`pasaron ${diasPasados} dias`);
} else {
    console.log(`La fecha de nac. no es valida`)
}

