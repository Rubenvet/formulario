const form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const nombreMascota = document.querySelector("#nombreDeMascota");
const edad = document.querySelector("#edad");
const list = document.querySelector("#datos")
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por registrarte," + " " + nombre.value);

    const idCliente = nombre.value;
    const idMascota = nombreMascota.value;
    const age = edad.value;

    const newLI = document.createElement("LI");
    newLI.innerText =  "Nombre de usuario: " + idCliente + " " + "Nombre de Mascota: " + idMascota + " " + "Edad: " + age ;
    list.append(newLI);
    nombre.value = "";
})