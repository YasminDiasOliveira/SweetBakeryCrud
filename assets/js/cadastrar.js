document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    let produtos = JSON.parse(localStorage.getItem("produtos")) || []

    const produto = {
        id: Date.now(),
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        valor: document.querySelector("#valor").value,
        concluida: false
    }

    produtos.push(produto)

    localStorage.setItem("produtos", JSON.stringify( produtos ))

    window.location.href = "index.html"
})