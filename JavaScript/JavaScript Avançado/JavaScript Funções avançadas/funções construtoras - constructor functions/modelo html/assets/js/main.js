function Calculadora(display) {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressEnter();
    };

    this.pressEnter = () => this.display.addEventListener('keyup', e => {
        if(e.keyCode === 13) this.equal()
        });

    this.clearDisplay = () => this.display.value = ' ';
    

    this.delete = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.equal = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida');
                return;
              }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida')
            return;
        };
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.delete();

            if (el.classList.contains('btn-eq'))  this.equal();

            this.display.focus();
        });
    };

    this.btnParaDisplay = el => this.display.value += el.innerText;
};

const calculadora = new Calculadora();
calculadora.inicia();