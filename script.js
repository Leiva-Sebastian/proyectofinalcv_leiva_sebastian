let menuVisible=false;
//funcion que muestra oculta el menu
function mostrarOcultarMenu(){
  if(menuVisible){
    document.getElementById("nav").classList="";
    menuVisible=false;
  }else{
    document.getElementById("nav").classList="responsive";
    menuVisible=true;
    
  }
}
function seleccionar(){
  //oculto el menu
  document.getElementById("nav").classList="";
  menuVisible=false;
  
}