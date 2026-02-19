// ===============================
// CAMBIO DE TEMA (Modo oscuro / claro)
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Cambiar texto del botón
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Modo claro";
    } else {
        themeToggle.textContent = "Modo oscuro";
    }
});


// ===============================
// MOSTRAR / OCULTAR INFORMACIÓN
// ===============================

const moreInfoBtn = document.getElementById("moreInfoBtn");
const extraInfo = document.getElementById("extraInfo");

moreInfoBtn.addEventListener("click", function () {

    if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
        extraInfo.style.display = "block";
        moreInfoBtn.textContent = "Mostrar menos información";
    } else {
        extraInfo.style.display = "none";
        moreInfoBtn.textContent = "Mostrar más información";
    }

});