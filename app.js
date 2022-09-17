let form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const nombreMascota = document.querySelector("#nombreDeMascota");
const comentario = document.querySelector("#comment")
const direccion = document.querySelector("#direccion");
const edad = document.querySelector("#edad");
const limpiar = document.querySelector("#limpiar")
const btn1 = document.querySelector("#btn1");
const info = document.querySelector("#newInfo");

const list = document.querySelector("#datos");
const add = document.querySelector("#dom")
const com = document.querySelector("#com")

enviar.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Gracias por registrarte," + " " + nombre.value);
    const idCliente = nombre.value;
    const idMascota = nombreMascota.value;
    const age = edad.value;
    const comment = comentario.value;
    const domi = direccion.value;
    nuevosDatos(idCliente, idMascota, age, comment, domi);

})



const nuevosDatos = (idCliente, idMascota, age, comment, domi) => {
    const newLI = document.createElement("li");
    const newCo = document.createElement("li");
    const newDo = document. createElement("li");

    newLI.innerText =  "Nombre de usuario: " + idCliente + " " + "Nombre de Mascota: " + idMascota + " " + "Edad: " + age ;
    newCo.innerText = "Comentario: " + " " + comment;
    newDo.innerText = "Direccion:" + " " + domi;

    list.append(newLI);
    com.append(newCo);
    add.append(newDo);
}



limpiar.addEventListener("click", (e) => {
        e.preventDefault();
        $('li').remove();
    })