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
}, 3000)

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
}, 3000);

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

function mudarCor(cor) {
  document.body.style.backgroundColor = cor;
}

const btnMenu = document.getElementById("hamburguer-button");
const menu = document.getElementById("cabeçalho")

btnMenu.classList.add("hamburguer-button-js-enabled");

function closeMenu() {
    btnMenu.setAttribute("aria-expanded", "false")
    menu.setAttribute("aria-hidden", "true")
    menu.classList.add("cabeçalho-closed")
}

closeMenu()

btnMenu.addEventListener("click", function(){

    let expanded = this.getAttribute("aria-expanded") === "true" ? true : false
    
    document.removeEventListener("click", closeMenu)

    if (expanded){
        menu.classList.add("cabeçalho-closed")
    } else{
        menu.classList.remove("cabeçalho-closed")
    }

    this.setAttribute("aria-expanded", !expanded)
    menu.setAttribute("aria-hidden", expanded)

    setTimeout(function(){
        if (!expanded){
        document.addEventListener("click", closeMenu)
    }
    }, 1)    
    
})

const mediaQuery = window.matchMedia("(min-width: 768px)")

function handleMediaQueryChange(e){

    if (e.matches){
        menu.setAttribute("aria-hidden", "false")
        btnMenu.setAttribute("aria-expanded", "true")
        menu.classList.remove("cabeçalho-closed")
    } else {
        menu.setAttribute("aria-hidden", "true")
        btnMenu.setAttribute("aria-expanded", "false")
        menu.classList.add("cabeçalho-closed")
    }
}

mediaQuery.addEventListener("change", handleMediaQueryChange)
handleMediaQueryChange(mediaQuery)

document.getElementById('submitBtn').addEventListener('click', function() {
  const totalQuestions = 10;
  let score = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    const options = document.getElementsByName('q' + i);
    for (const option of options) {
      if (option.checked && option.value === '1') {
        score++;
      }
    }
  }

  const percentage = (score / totalQuestions) * 100;
  let message = `Você acertou ${score} de ${totalQuestions} perguntas (${percentage.toFixed(0)}%). `;

  if (percentage === 100) {
    message += "Parabéns! Você conhece muito bem os cuidados com enchentes.";
  } else if (percentage >= 70) {
    message += "Muito bom! Continue se informando e tomando cuidado.";
  } else if (percentage >= 40) {
    message += "Legal, mas é importante estudar mais sobre segurança em enchentes.";
  } else {
    message += "Infelizmente sua pesquiza não foi satisfatoria.";
  }

  document.getElementById('result').textContent = message;
});

document.getElementById('restartQuizBtn').addEventListener('click', function() {
  const totalQuestions = 10;

  for (let i = 1; i <= totalQuestions; i++) {
    const options = document.getElementsByName('q' + i);
    options.forEach(option => {
      option.checked = false;
    });
  }

  document.getElementById('result').textContent = "";

  document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
});