window.addEventListener("load", atualizar )

function atualizar(){
    document.querySelector("#lista-produtos").innerHTML = ""
    let produtos = JSON.parse(localStorage.getItem("produtos")) || []
    produtos.forEach(produto => criarCard(produto))
}

function criarCard(produto){
    const card = document.createElement("div")
    card.classList.add("col", "s12", "m6", "l4")

    card.innerHTML = `
        <div class="card ${produto.concluida ? 'grey': ''}">
            <div class="card-content">
            <span class="card-title">${produto.titulo}</span>
            <p>${produto.descricao}</p>
            <span data-badge-caption="reais" class="badge blue white-text">
                ${produto.valor}
            </span>
            </div>
            <div class="card-action">
            <a href="#" class="btn red" onClick="apagar(${produto.id})">
                <i class="material-icons">delete</i>
                </a>
                <a href="#" class="btn green" onClick="concluir(${produto.id})">
                    <i class="material-icons">check</i>
                </a>
            </div>
        </div>
    `

    document.querySelector("#lista-produtos").appendChild(card)

}