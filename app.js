const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const nombreMascota = document.querySelector("#nombreDeMascota");
const comentario = document.querySelector("#comment")
const direccion = document.querySelector("#direccion");
const edad = document.querySelector("#edad");

const list = document.querySelector("#datos");
const add = document.querySelector("#dom")
const com = document.querySelector("#com")


form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por registrarte," + " " + nombre.value);

    const idCliente = nombre.value;
    const idMascota = nombreMascota.value;
    const age = edad.value;
    const comment = comentario.value;
    const domi = direccion.value;


    const newLI = document.createElement("LI");
    const newCo = document.createElement("Co");
    const newDo = document. createElement("Do");

    newLI.innerText =  "Nombre de usuario: " + idCliente + " " + "Nombre de Mascota: " + idMascota + " " + "Edad: " + age ;
    newCo.innerText = "Comentario: " + " " + comment;
    newDo.innerText = "Direccion:" + " " + domi;

    list.append(newLI);
    com.append(newCo);
    add.append(newDo);
})