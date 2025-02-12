
class heroi {
    constructor(nome,idade,tipo,) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; 
    }
    atacar(){
        let ataque;
            switch (this.tipo) {
                case "guerreiro":
                    ataque = "espada"
                    break;
                case "mago":
                    ataque = "magia"
                    break;
                case "ninja":
                    ataque = "shuriken"
                    break;
                case "monge":
                    ataque = "artes marciais"
                    break;
                default:
                    ataque = "ataque misterioso"
                    break;
            }
                console.log("O "+ this.tipo+" " + this.nome + " usou o ataque "+ ataque)
    }
}

let heroiGuerreiro = new heroi("Shazam", 30, "guerreiro")
let heroiMago = new heroi("Gandalf", 56, "mago")
let heroiNinja = new heroi("Naruto", 25, "ninja")
let heroiMonge = new heroi("Alberto", 89, "monge")

heroiMonge.atacar()
heroiGuerreiro.atacar()
heroiMago.atacar()
heroiNinja.atacar()





