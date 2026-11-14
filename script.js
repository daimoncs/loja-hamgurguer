// Variável simples para guardar o valor total do pedido
let valorTotal = 0;

// Função para adicionar o lanche escolhido ao carrinho
function adicionarAoPedido(nomeLanche, precoLanche) {
    
    // 1. Soma o preço do lanche na nossa variável total
    valorTotal = valorTotal + precoLanche;

    // 2. Encontra a lista <ul> no HTML onde os itens aparecem
    let listaCarrinho = document.getElementById("lista-carrinho");

    // 3. Cria um novo elemento <li> (item de lista) na memória
    let novoItem = document.createElement("li");

    // 4. Define o texto que vai dentro desse <li>
    novoItem.innerText = nomeLanche + " - R$ " + precoLanche.toFixed(2);

    // 5. Adiciona o item de fato dentro da lista na tela
    listaCarrinho.appendChild(novoItem);

    // 6. Atualiza o texto do valor total lá no HTML
    document.getElementById("total-carrinho").innerText = valorTotal.toFixed(2);

    // Mensagem simples de confirmação
    alert(nomeLanche + " foi adicionado ao pedido!");
}

// Função para abrir a tela do carrinho e esconder a vitrine
function abrirCarrinho() {
    let vitrine = document.getElementById("vitrine-lanches");
    let carrinho = document.getElementById("carrinho");

    vitrine.hidden = true;   // Esconde a vitrine
    carrinho.hidden = false; // Mostra o carrinho
}

// Função para fechar o carrinho e voltar para a vitrine
function fecharCarrinho() {
    let vitrine = document.getElementById("vitrine-lanches");
    let carrinho = document.getElementById("carrinho");

    vitrine.hidden = false;  // Mostra a vitrine
    carrinho.hidden = true;  // Esconde o carrinho
}