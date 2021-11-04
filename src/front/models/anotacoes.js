class Anotacoes{
    constructor(titulos, notas){
        if(this.verificado(titulos) && this.verificado(notas)){
            this.titulos = titulos;
            this.notas = notas;
        }
    }

    verificado(texto){
        if(typeof texto != "string"){                      
            console.log("Criação de notas - dados inválidos!");
            return false;
        } else {
            return true;
        }
    }
}

var resilia = new Anotacoes("titulo", "conteudo_nota")