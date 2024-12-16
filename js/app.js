const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha= document.querySelector('.fecha');
console.log(enlaces);

document.addEventListener('DOMContentLoaded',()=>{
mostrarMenu();
cerrarMenu();
fechaActual();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{

    navegacion.classList.toggle('ocultar');
    });
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
enlace.addEventListener('click',(e)=>{
  e.preventDefault();
  const seccion = document.querySelector(e.target.attributes.href.value);
  cambioSeccion(seccion);
  if(e.target.tagName === 'A'){
    navegacion.classList.add('ocualtar');
  }
});
    });
}

function cambioSeccion(seccion){
  seccion.scrollIntoView({
    behavior:'smooth'
  }

  )
}

function fechaActual(){
  let fechaHoy= new Date().getFullYear();
  fecha.textContent = fechaHoy;

}
