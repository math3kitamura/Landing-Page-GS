let count = 1;
document.getElementById("radio1").checked = true;

function nextImage(){
    count++;
    if(count > 2){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

setInterval( function(){
    nextImage();
}, 2500)

const form = document.getElementById('form');
const local = document.getElementById('local');
const data = document.getElementById('data');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkInputLocal()
})

function checkInputLocal(){
    const localValue = local.value;

    if(localValue === ""){
        errorInput(local, "Você precisa preencher este campo")
    } else{
        const formItem = local.parentElement;
        formItem.classList = "form-content"
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector(".error-message")

    textMessage.innerText = message;
    formItem.className = "form-content error";
}