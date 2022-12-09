export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "") // o metodo replace recebe dois parametros que é o que deseja substituir seguido do que vai no lugar
    // a expreção regular é escrita entre barras invertidas se for encontrado ponto ou espaço vai ser substituido por espaço em branco
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        console.log("Esse cpf não existe")
    }else{
        console.log("Existe!")
    }

}

function validaNumerosRepetidos (cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]
    
    return numerosRepetidos.includes(cpf)
    
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++ ){
        soma += cpf[tamanho] * multiplicador
        multiplicador--
    }

    soma = (soma * 10 ) % 11 // modolo da divisão por 11 %
    if(soma == 10 || soma == 1){
        soma = 0
    }

    return soma != cpf[9]
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++ ){
        soma += cpf[tamanho] * multiplicador
        multiplicador--

    }

    // console.log(soma)//318

    soma = (soma * 10 ) % 11 // modolo da divisão por 11 %
    if(soma == 10 || soma == 1){
        soma = 0
    }

    return soma != cpf[10] // isso é uma comparação de valores
    
}