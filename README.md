Simulação de Site de Fast Food
Descrição
Este projeto é uma simulação de um site de fast food onde os usuários podem escolher entre dois restaurantes (McDonald's e Burger King), explorar categorias de produtos e fazer pedidos. O sistema calcula o total dos pedidos conforme a quantidade de cada item é ajustada.

Funcionalidades
Escolha do Restaurante: O usuário pode escolher entre McDonald's e Burger King na página inicial.
Menu Lateral: Após a escolha do restaurante, o menu lateral exibe categorias de produtos.
Itens do Menu: Cada item inclui foto, descrição, preço e caixa para quantidade.
Cálculo do Total: O total é atualizado dinamicamente conforme a quantidade de cada item é alterada.
Resumo do Pedido: Um modal exibe um resumo do pedido com a possibilidade de confirmar o pedido final.
Estrutura do Projeto
1. Página Inicial (index.html)
Descrição: Página onde o usuário escolhe o restaurante.
Componentes:
Lista de restaurantes com imagem e nome.
Função para redirecionar para a página de cardápio correspondente.
2. Página de Cardápio (mc.html ou bk.html)
Descrição: Página que exibe o cardápio do restaurante escolhido.
Componentes:
Menu lateral com categorias de produtos.
Área principal para exibir os itens do menu.
Modal de resumo do pedido.
3. JavaScript (js/script.js)
Descrição: Scripts para gerenciar o carregamento das categorias, atualização do total e controle do modal.
Principais Funções:
loadCategory(category): Carrega e exibe itens da categoria selecionada.
updateTotal(): Calcula e atualiza o total do pedido.
Eventos de clique para confirmar o pedido e fechar o modal.
4. Arquivos de Dados (data/*.json)
Descrição: Arquivos JSON contendo os dados dos itens do menu, incluindo imagem, nome, ingredientes e preço.
Instruções de Uso
Abra o arquivo index.html em um navegador para visualizar a página inicial.
Escolha um restaurante para ser redirecionado à página de cardápio correspondente.
Navegue pelo menu lateral e selecione categorias para visualizar os itens.
Ajuste a quantidade dos itens e observe o total sendo atualizado.
Clique em "Confirmar Pedido" para visualizar o resumo do pedido e confirmar a compra.
Tecnologias Utilizadas
HTML5: Estrutura da página.
CSS3: Estilização e layout.
JavaScript: Funcionalidade interativa e manipulação do DOM.
