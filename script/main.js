//Variáveis

const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-div button");
const qrCodeInput = document.querySelector("#qr-div input");
const qrCodeImage = document.querySelector("#qrCodeImg");

//Funções

function gerarQrCode(){
    const qrCodeInputValue = qrCodeInput.value ;
    
    if(!qrCodeInputValue){return};

    qrCodeBtn.innerHTML = "Gerando código QR Code...";

    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${qrCodeInputValue}`;

    qrCodeImage.addEventListener("load", ()=>{
        container.classList.add("active");
        qrCodeBtn.innerHTML="Código criado!"
    })
    
}


//Eventos

qrCodeBtn.addEventListener("click", () => {
    gerarQrCode();
})