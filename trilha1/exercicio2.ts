class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;
  
    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
      this.lido = lido;
    }
  
    marcarComoLido(): void {
      if (!this.lido) {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi lido.`);
      } else {
        console.log(`O livro "${this.titulo}" já foi lido.`);
      }
    }
  
    exibirInformacoes(): void {
      console.log(
        `Título: ${this.titulo} Autor: ${this.autor} Páginas: ${this.paginas} nLido: ${this.lido ? "Sim" : "Não"}`
      );
    }
  }
  