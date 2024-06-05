class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de intância
    aumentarVolume() {
        this.volume += 2;
    }
    
    //Método de intância
    DiminuirVolume() {
        this.volume -= 2;
    }

    //método estático
    static soma(x, y) {//static - altera tudo
        return x + y;
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);

//Static - Só pode ser chamado com a classe
console.log(ControleRemoto.soma(2, 4));