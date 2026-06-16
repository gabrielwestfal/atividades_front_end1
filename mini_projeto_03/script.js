const inNome = document.getElementById("inNome");
const inPreco = document.getElementById("inPreco");
const inCategoria = document.getElementById("inCategoria");
const btRegistrar = document.getElementById("btRegistrar");
const outSaida = document.getElementById("outSaida");
const btExportar = document.getElementById("btExportar");
const btdeletar = document.getElementById("btDeletar");
const outExportar = document.getElementById("outExportar");

btRegistrar.addEventListener("click", registrar);
btExportar.addEventListener("click", exportar);
btdeletar.addEventListener("click", deletar);

let produtos = [];


function registrar() {

    const nome = inNome.value;
    const preco = Number(inPreco.value);
    const categoria = inCategoria.value;

    if (inNome.value == "" || inCategoria.value == "") {
        alert("Todos os campos devem ser preechidos para registrar um novo produto");

    } else if (inPreco.value <= 0) {
        alert("O valor do novo produto deve ser maior que R$0!")
        inPreco.focus();
    } else {
        let produto = {};
        produto.nome = nome;
        produto.preco = preco;
        produto.categoria = categoria;
        produtos.push(produto);
        inNome.value = "";
        inPreco.value = "";
        inCategoria.value = "";

        inNome.focus();
        relatorio();
        
    }
}
function relatorio() {
    let catalogo;
    catalogo = "";
    for (ind = 0; ind < produtos.length; ind++) {
        catalogo += `<tr>
        <td>${produtos[ind].nome}</td>
        <td>${produtos[ind].preco}</td>
        <td>${produtos[ind].categoria}</td>
        </tr>`;
        

    }
    outSaida.innerHTML = catalogo;
    console.log(produtos);
}
function deletar() {
    if (produtos.length == 0) {
        alert("Não há produtos para deletar!");
    } else {
        for (ind = 0; ind < produtos.length; ind++) {
            if (produtos[ind].nome == inNome.value) {
                produtos.splice(ind, 1);
            }
        }
        relatorio();
    }
}
function exportar() {
    produtosJSON = JSON.stringify(produtos);
    console.log(produtosJSON);
    outExportar.innerHTML = "JSON exportado: " + produtosJSON;

}
