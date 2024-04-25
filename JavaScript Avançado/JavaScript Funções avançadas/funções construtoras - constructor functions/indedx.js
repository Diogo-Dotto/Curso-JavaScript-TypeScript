// Função construtora -> Objetos
// Construtora -> Pessoa (new) | começa com new
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método!')
    };
}

const p1 = new Pessoa('Diogo', 'Dotto');
const p2 = new Pessoa('Rafaela', 'Bellini');
p2.metodo();

/*
function Calculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.equal();
                }
            });
        },

        clearDisplay() {
            this.display.value = ' ';
        },

        delete() {
            this.display.value = this.display.value.slice(0, -1);
        },

        equal() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta ) {
                    alert('Conta inválida!')
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida')
                return;
            }
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.delete();
                }

                if (el.classList.contains('btn-eq')) {
                    this.equal();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },



    };
}

const calculadora = new Calculadora();
calculadora.inicia()
*/