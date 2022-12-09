import ehUmCPF from "./valida-cpf.js"
import ehMaiorDeIdade from "./valida-idade.js"

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach(campos =>{
    campos.addEventListener("blur",  () => verificaCampo(campos))
    
})

function verificaCampo (campo){
   if(campo.name == "cpf" && campo.value.length >= 11 ){
     ehUmCPF(campo)
   }

   if(campo.name == 'aniversario' && campo.value != ""){
      ehMaiorDeIdade(campo)
   }
}