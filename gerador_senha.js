

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let buttonElement = document.querySelector("#button")
let sizePassaword = document.querySelector("#valor")
let sliderElement = document.querySelector("#slider")
let containerPassword = document.querySelector("#container-password")
let password = document.querySelector("#password")



function sliderImput(){
    sizePassaword.innerHTML = sliderElement.value
}
    
function generatePassword () {
    // criar uma variável que receberá a senha (pass, por exemplo)
    // percorrer o array charset Y vezes (Y = tamanho da senha)
    // pegar um valor random entre 0 e charset.length - 1
    // acessar o array charset no índice X (X é o número random do passo anterior)
    // incrementar pass com o valor do passo anterior
    // escrever o valor de pass na tela

    let pass = ""
    for (let i= 0; i < sliderElement.value; i++) {
        let indiceAleatorio = Math.floor(Math.random()* charset.length-1)
        charset[indiceAleatorio]
        pass += charset[indiceAleatorio]
    }
    containerPassword.style.setProperty("visibility", "visible")
    password.innerHTML = pass
}   

async function copyPassword () {
    await navigator.clipboard.writeText(password.textContent)
    window.alert("Sua senha foi copiada, clique ok para confirmar")
}
