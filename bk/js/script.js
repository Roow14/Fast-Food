document.addEventListener('DOMContentLoaded', function() {
    const itensContainer = document.getElementById('menu-items');
    const welcomeImage = document.querySelector('.welcome-image');
    const totalPriceElement = document.getElementById('total-price');
    const orderSummaryModal = document.getElementById('order-summary-modal');
    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');
    const confirmOrderButton = document.getElementById('confirm-order');
    const closeModalButton = document.getElementById('close-modal');
    const confirmFinalOrderButton = document.getElementById('confirm-final-order');

    function loadCategory(category) {
        console.log(`Tentando carregar a categoria: ${category}`);
        fetch(`data/${category}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                itensContainer.innerHTML = '';
                welcomeImage.style.display = 'none';

                if (data.length === 0) {
                    itensContainer.innerHTML = '<p>Menu vazio.</p>';
                    return;
                }

                data.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('menu-item');

                    itemDiv.innerHTML = `
                        <img src="img/${item.img}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.ingredients}</p>
                        <strong>R$ ${item.price.toFixed(2)}</strong>
                        <div class="quantity">
                            <label for="quantity-${item.name.replace(/\s+/g, '-')}">Quantidade:</label>
                            <input type="number" id="quantity-${item.name.replace(/\s+/g, '-')}" name="quantity" min="0" value="0">
                        </div>
                    `;

                    itensContainer.appendChild(itemDiv);

                    const quantityInput = itemDiv.querySelector('input[name="quantity"]');
                    quantityInput.addEventListener('input', updateTotal);
                });

                updateTotal();
            })
            .catch(error => {
                console.error('Erro ao carregar os itens:', error);
                itensContainer.innerHTML = '<p>Menu não encontrado.</p>';
            });
    }

    function updateTotal() {
        let total = 0;

        const orderItems = [];

        document.querySelectorAll('.menu-item').forEach(itemDiv => {
            const name = itemDiv.querySelector('h3').textContent;
            const priceText = itemDiv.querySelector('strong').textContent.replace('R$ ', '');
            const price = parseFloat(priceText);
            const quantityInput = itemDiv.querySelector('input[name="quantity"]');
            const quantity = parseInt(quantityInput.value, 10);

            if (quantity > 0) {
                total += price * quantity;
                orderItems.push(`${name} - Quantidade: ${quantity} - Preço: R$ ${price.toFixed(2)}`);
            }
        });

        totalPriceElement.textContent = total.toFixed(2);

        // Atualizar o resumo do pedido no modal
        orderSummary.innerHTML = orderItems.map(item => `<p>${item}</p>`).join('');
        orderTotal.textContent = total.toFixed(2);
    }

    // Adicionar evento de clique ao botão de confirmar pedido
    confirmOrderButton.addEventListener('click', function() {
        orderSummaryModal.style.display = 'block';
    });

    // Fechar o modal
    closeModalButton.addEventListener('click', function() {
        orderSummaryModal.style.display = 'none';
    });

    confirmFinalOrderButton.addEventListener('click', function() {
        alert('Pedido confirmado!');
        orderSummaryModal.style.display = 'none';
        // Aqui você pode adicionar a lógica para enviar o pedido ao servidor, se necessário
    });

    document.querySelectorAll('.menu-lateral li').forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('onclick').split('\'')[1];
            console.log(`Carregando categoria: ${category}`);
            loadCategory(category);
        });
    });
});
