let form = document.querySelector("#form");
const nombre = document.querySelector("#nombre");
const nombreMascota = document.querySelector("#nombreDeMascota");
const comentario = document.querySelector("#comment")
const direccion = document.querySelector("#direccion");
const edad = document.querySelector("#edad");
const limpiar = document.querySelector("#limpiar")
const btn1 = document.querySelector("#btn1");
const info = document.querySelector("#newInfo");
const objeto = document.querySelector(".objeto");
const form2 = document.querySelector("#form2");



const text = document.querySelector(".objeto");

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


    const formData = new FormData(form);
    const data = Object.fromEntries(formData);



    fetch('https://reqres.in/api/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log = data)
        .catch(error => console.log(error));
})



function nuevosDatos(idCliente, idMascota, age, comment, domi) {
    const newLI = document.createElement("li");
    const newCo = document.createElement("li");
    const newDo = document.createElement("li");


    newLI.innerText = "Nombre de usuario: " + idCliente + " " + "Nombre de Mascota: " + idMascota + " " + "Edad: " + age;
    newCo.innerText = "Comentario: " + " " + comment;
    newDo.innerText = "Direccion:" + " " + domi;


    list.append(newLI);
    com.append(newCo);
    add.append(newDo);
}



limpiar.addEventListener("click", (e) => {
    e.preventDefault();
    $('li').remove();
});



// form2.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let objeto = document.getElementById(".objeto");
//     let json = objeto.value;
//     const obj = JSON.parse(json);
//     console.log(obj.employees[0]);
// })

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);

//     fetch('https://reqres.in/api/users', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
// })