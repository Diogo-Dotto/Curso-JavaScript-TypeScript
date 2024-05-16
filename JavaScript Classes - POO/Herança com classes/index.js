class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); //super - chama construtor da classe-pai e executa na classe-filho

        this.cor = cor;
        this.modelo = modelo;
    }
} // extends - faz com que uma classe herde propriedades de outra classe

class Tablet extends DispositivoEletronico {
    constructor(nome, wifi){
        super(nome);
        this.wifi = wifi;
    }

    ligar() {
        console.log('Olha voce alterou o método ligar');
    }

    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy s20');
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar();
t1.ligar();
t1.falaOi();