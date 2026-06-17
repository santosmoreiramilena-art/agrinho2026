// ===============================
// AGRINHO 2026 - SCRIPT PRINCIPAL
// ===============================

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", function () {

    // -------------------------------
    // 1. MENU (exemplo de interação)
    // -------------------------------
    const menu = document.querySelector(".menu");
    const botaoMenu = document.querySelector(".botao-menu");

    if (botaoMenu && menu) {
        botaoMenu.addEventListener("click", function () {
            menu.classList.toggle("ativo");
        });
    }

    // -------------------------------
    // 2. ANIMAÇÃO AO ROLAR A PÁGINA
    // -------------------------------
    const elementos = document.querySelectorAll(".animar");

    function animarScroll() {
        const topo = window.scrollY + window.innerHeight;

        elementos.forEach(el => {
            if (el.offsetTop < topo - 100) {
                el.classList.add("visivel");
            }
        });
    }

    window.addEventListener("scroll", animarScroll);

    // -------------------------------
    // 3. VALIDAÇÃO DE FORMULÁRIO
    // -------------------------------
    const form = document.querySelector("#formContato");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.querySelector("#nome").value.trim();
            const email = document.querySelector("#email").value.trim();
            const mensagem = document.querySelector("#mensagem").value.trim();

            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            alert("Mensagem enviada com sucesso!");
            form.reset();
        });
    }

});
