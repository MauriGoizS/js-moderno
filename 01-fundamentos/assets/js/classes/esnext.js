
class Rectangulo {

    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = altura * base;
    }

    calcularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(20, 10);
// rectangulo.#area = 100;
rectangulo.calcularArea();
console.log(rectangulo);
