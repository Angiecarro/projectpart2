
let tickets = {
    "argentina": 3,
    "brazil": 2,
    "chile": 1,
    "españa": 6,
    
  }
  
  function saludar(){
    swal("Bienvenido al apartado de Fechas y Tours!!", nombre, "success");
  }
  
  function getTickets(ciudad) {
    while (tickets[ciudad] > 0) {
      swal("Compra realizada", "Tienes 1 entrada para el concierto de " + ciudad + 
      " ", "success");
      tickets[ciudad]--;  
      disableSoldOutButtons()
      return; 
     }
     swal(
      "SOLD OUT!",
      "no quedan más entradas para el concierto de " + 
      ciudad,)
    }
      
  
     function disableSoldOutButtons(){
    for (let ciudad in tickets) {
      if (tickets[ciudad] === 0) {
          let boton = document.getElementById(ciudad.replace(/\s+/g, ''));
          if (boton) {
              boton.textContent = "SOLD OUT";
              boton.style.backgroundColor= "pink"
          }
      }
  }
  }
  
  
  function edadUsuario(){
    let edad = parseInt(prompt("Ingrese su edad"))
    if(edad <18){
      swal( "tenes que ser mayor de 18 para comprar tickets")
      let todosLosBotones = document.querySelectorAll("button")
      for (let i = 0; i < todosLosBotones.length; i++) {
        todosLosBotones[i].style.backgroundColor= "blue"
        todosLosBotones[i].disabled = true
        todosLosBotones[i].textContent = "Bloqueado"
        }
      
    }else{
      saludar()
    }
  
    }
  edadUsuario()

  let nombre = prompt("Cuál es tu nombre?").toUpperCase();
  
   while (nombre.length < 3) {
    nombre = prompt(
      "el nombre no puede ser tan corto por favor ingresa al menos 3 letras",
    ).toUpperCase();
  }
  const span = document.getElementById("welcome");
  span.textContent = ` Hola, ${nombre}`;
  const i = document.querySelector("i");
  i.setAttribute("class", "fa-ticket fa-solid fa-ticket fa-lg ");
  
 


