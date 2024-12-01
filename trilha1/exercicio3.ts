class Produto {
    nome: string;
    preco: number;
    quantidade: number;
  
    constructor(nome: string, preco: number, quantidade: number) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    calcularValorTotalEmEstoque(): number {
      const valorTotal = this.preco * this.quantidade;
      return valorTotal;
    }
  
    exibirInformacoes(): void {
      console.log(
        `Nome: ${this.nome} Preço: R$${this.preco} Quantidade: ${this.quantidade} Valor Total em Estoque: R$${this.calcularValorTotalEmEstoque()}`
      );
    }
  }
  