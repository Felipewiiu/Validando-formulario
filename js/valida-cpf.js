export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "") // o metodo replace recebe dois parametros que é o que deseja substituir seguido do que vai no lugar
    // a expreção regular é escrita entre barras invertidas se for encontrado ponto ou espaço vai ser substituido por espaço em branco
    console.log(cpf)
}