console.log("Cargar Script");

var contador= 0;

function incremento() {
  let x = document.getElementById('cuenta');
  x.innerText=contador;
  contador= contador + 1;
  setTimeout(incremento, 1000)
  //console.log(setTimeout(incremento, 1000));
}

function fecha() {
  let x = document.getElementById('fecha_hoy');
  x.innerText=  new Date().toLocaleTimeString();
  contador = contador + 1;
  setTimeout(fecha, 1000)
  //console.log(setTimeout(incremento, 1000));
}

incremento();
fecha();
