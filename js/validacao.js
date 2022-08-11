const botaoEnviar = document.getElementById('submit-btn');

const camposObrigatorios = document.querySelectorAll('.campos');

botaoEnviar.addEventListener('click', function showValidationMessage() {
    camposObrigatorios.forEach(function(campo) {
        if (campo.value === "") {
            campo.style.borderColor = "#F52E2E";
            campo.style.marginTop = "6px";
            let validationMessage = campo.nextElementSibling;
            validationMessage.classList.add("mostrar");
            const submitBtn = document.getElementById("submit-btn");
            submitBtn.style.marginTop = "11px";
        } else if (campo.value !== ""){
            campo.style.marginTop = "15px";
            campo.style.borderColor = "#00C22B";
            let validationMessage = campo.nextElementSibling;
            validationMessage.classList.remove("mostrar");
        }
    }) 
}
)  


    


