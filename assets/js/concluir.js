function concluir(id){
    const produtos = JSON.parse(localStorage.getItem("produtos")) || []
    let produto = produtos.find(t => t.id === id)
    produto.concluida = true
    localStorage.setItem("produtos", JSON.stringify(produtos) )
    atualizar()
}

//a