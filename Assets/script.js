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
    
    checkForm();
})

local.addEventListener("blur", () =>{
    checkInputLocal()
})

data.addEventListener("blur", () =>{
    checkInputData()
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

function checkInputData(){
    const dataValue = data.value;

    if(dataValue === ""){
        errorInput(data, "Você precisa preencher este campo")
    } else{
        const formItem = data.parentElement;
        formItem.classList = "form-content"
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector(".error-message")

    textMessage.innerText = message;
    formItem.className = "form-content error";
}

function checkForm(){
    checkInputLocal();
    checkInputData();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })  

    if (isValid){
        alert("Registro confirmado!")
        clearForm()
    }
}

function clearForm() {
    local.value = "";
    data.value = "";
}

let tecCount = 1;
document.getElementById("tec1").checked = true;

function nextImage2(){
    tecCount++;
    if(tecCount > 4){
        tecCount = 1;
    }
    document.getElementById("tec" + tecCount).checked = true;
}

setInterval(function(){
    nextImage2();
}, 2500);