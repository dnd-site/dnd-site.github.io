var contra ="alcoy.pruebas";
    contra = prompt("TODAVIA NO ESTÁ DISPONIBLE. SI ERES PROPIETARIO INTRODUCE CONTRASEÑA");
if(contra =="alcoy.pruebas"){
  document.white("Redireccionando ...");
var pagina = "index.html";
  function redirecionar(){
    location.href = pagina
  }
  setTimeout ("redireccionar()", 0);
}else{
  window.location.href = "error_contraseña.html";
}
