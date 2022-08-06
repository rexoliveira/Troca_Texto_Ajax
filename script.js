const btn1 = document.querySelector("#botao1");
const btn2 = document.querySelector("#botao2");
const btn3 = document.querySelector("#botao3");
var texto = document.querySelector(".escolha");
const btn = [btn1, btn2, btn3];
let ajax = new XMLHttpRequest();

btn.forEach((el, index) => {
    el.addEventListener("click", () =>
        trocaTexto(
            "Botão-" + (index + Number(1)) + "<hr>",
            "pagina" + (index + Number(1)) + ".html"
        )
    );
});

function trocaTexto(nome, url) {
    texto.innerHTML = "";
    texto.innerHTML = "<span class=\"nomebotao\">" + nome.toUpperCase() + "</span>"
    texto.innerHTML = texto.innerHTML + "<span class=\"status\">STATUS:</span><hr>"

    var ajax = new XMLHttpRequest();
    texto.innerHTML =
        texto.innerHTML +
        "Antes____________________open: " +
        ajax.readyState +
        " - Status: " +
        ajax.status +
        "<br><hr>";

    ajax.open("GET", url, true);

    ajax.send(null);
    mensagem();

    ajax.onreadystatechange = function conteudo() {
        mensagem();

        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                texto.innerHTML =
                    texto.innerHTML + "<span class=\"titulotexto\">TEXTO:</span><hr>" + "<span class=\"texto\">" + ajax.responseText + "</span>";
            } else {
                texto.innerHTML =
                    "<span class=\"erro\">" + texto.innerHTML + "Erro ao acessar a página: " + ajax.status + "</span>";
            }
        }
    };

    function mensagem() {
        return (texto.innerHTML =
            "<span class=\"mensagem\">" + texto.innerHTML +
            "Apos__open/onreadystatechange: " +
            ajax.readyState +
            " - Status: " +
            ajax.status +
            "<span><hr>");
    }
}