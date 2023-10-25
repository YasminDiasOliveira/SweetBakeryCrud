function apagar(id){
    const produtos = JSON.parse(localStorage.getItem("produtos")) || []
    const produtos_filtrados = produtos.filter(produto => produto.id !== id)
    localStorage.setItem("produtos", JSON.stringify(produtos_filtrados) )
    atualizar()
}