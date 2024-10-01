console.log("Hola mundo");


const socket = io(); 


socket.emit("mensaje", "Hola Mundo! Te escribo desde el cliente");

socket.on("saludito", (data) => {
    console.log(data);
})

socket.on("usuarios", (data) => {
    const listaUsuarios = document.getElementById("lista-usuarios"); 

    data.forEach( usuario => {
        listaUsuarios.innerHTML += `<li> ${usuario.nombre} - ${usuario.apellido} </li>`
    })
})