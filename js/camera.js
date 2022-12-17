const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFotos = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]')
const botaoEnviarFoto = document.querySelector('[data-enviar]')
let imagemURL = ""


botaoIniciarCamera.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices.
    getUserMedia({video:true, audio:false})// método para se utilisar a câmera

    botaoIniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'
    video.srcObject = iniciarVideo;// a tag video recebe essa variável
})

botaoTirarFotos.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL('image/jpeg', 1.0);

    campoCamera.style.display = "none"
    mensagem.style.display = "block"
    
})

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistente = localStorage.getItem("cadastro")
    const converteRetorno = JSON.parse(receberDadosExistente)
    console.log(converteRetorno)

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))

    window.location.href = "./abrir-conta-form-3.html"
})
