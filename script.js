let valorTotal = 0;

function adicionarAoPedido(nomeLanche, precoLanche) {
        
    valorTotal = valorTotal + precoLanche;
    
    let listaCarrinho = document.getElementById("lista-carrinho");
    
    let novoItem = document.createElement("li");
    
    novoItem.innerText = nomeLanche + " - R$ " + precoLanche.toFixed(2);
    
    listaCarrinho.appendChild(novoItem);

    document.getElementById("total-carrinho").innerText = valorTotal.toFixed(2);

    alert(nomeLanche + " foi adicionado ao pedido!");
}


function abrirCarrinho() {
    let vitrine = document.getElementById("vitrine-lanches");
    let carrinho = document.getElementById("carrinho");

    vitrine.hidden = true;   
    carrinho.hidden = false; 
}


function fecharCarrinho() {
    let vitrine = document.getElementById("vitrine-lanches");
    let carrinho = document.getElementById("carrinho");

    vitrine.hidden = false;  
    carrinho.hidden = true;  
}