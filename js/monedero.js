document.addEventListener('DOMContentLoaded', () => {
    const balanceInput = document.querySelector('#Balance\\ estimado');
    const cryptoSelect = document.querySelector('.select select');
    const balanceEuros = document.getElementById('balance-euros');

    const updateBalance = () => {
        const amount = parseFloat(balanceInput.value);
        let factor = 0;

        switch (cryptoSelect.value) {
            case 'Bitcoin':
                factor = 2.5;
                break;
            case 'Ethereum':
                factor = 10.3;
                break;
            case 'Litecoin':
                factor = 0.5;
                break;
        }

        if (!isNaN(amount)) {
            balanceEuros.textContent = (amount * factor).toFixed(2) + '€';
        } else {
            balanceEuros.textContent = '0.00€';
        }
    };

    balanceInput.addEventListener('input', updateBalance);
    cryptoSelect.addEventListener('change', updateBalance);
});