class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldoInicial: number = 0) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      if (valor <= 0) {
        console.log("O valor do depósito deve ser maior que zero.");
        return;
      }
      this.saldo += valor;
      console.log(`Depósito de R${valor} realizado com sucesso.`);
    }
  
    sacar(valor: number): void {
      if (valor <= 0) {
        console.log("O valor do saque deve ser maior que zero.");
        return;
      }
      if (valor > this.saldo) {
        console.log("Saldo insuficiente.");
        return;
      }
      this.saldo = valor;
      console.log(`Saque de R${valor} realizado.`);
    }
  
  }
  