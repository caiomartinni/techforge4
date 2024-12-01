class Order {
    private items: { name: string; price: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: boolean = false;
    private shippingStatus: boolean = false;
  
    addItem(item: { name: string; price: number }): void {
      this.items.push(item);
      this.calculateTotalPrice();
    }
  
    private calculateTotalPrice(): void {
      this.totalPrice = this.items.reduce((sum, item) => sum + item.price, 0);
    }
  
    processPayment(): void {
      if (this.totalPrice > 0) {
        this.paymentStatus = true;
        console.log("Pagamento processado com sucesso!");
      } else {
        console.log("Não é possível processar o pagamento. Carrinho vazio.");
      }
    }
  
    updateShippingStatus(): void {
      if (this.paymentStatus) {
        this.shippingStatus = true;
        console.log("Status de envio atualizado: Produto enviado!");
      } else {
        console.log("Não é possível enviar o produto sem o pagamento.");
      }
    }
  
    getOrderDetails(): void {
      console.log("Itens:", this.items);
      console.log("Preço total:", this.totalPrice);
      console.log("Status do pagamento:", this.paymentStatus ? "Pago" : "Não pago");
      console.log("Status do envio:", this.shippingStatus ? "Enviado" : "Não enviado");
    }
  }
  