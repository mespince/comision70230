const temprano = () => {
    console.log("Buenos Dias");
}

const tarde = () => {
    console.log("Buenos Tardess");
}

const noche = () => {
    console.log("Buenos Noches");
}
// Common JS
// module.exports={
//     temprano,
//     tarde,
//     noche,
// }

// ES Modules
export {temprano, tarde, noche}
