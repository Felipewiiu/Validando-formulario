const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach(campos =>{
    campos.addEventListener("blur",  () => verificaCampo(campos))
    
})

function verificaCampo (campo){
   console.log(campo)
}