abstract class Inventory {
  protected items: Record<string, number>;

  constructor() {
    this.items = {};
  }

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;

  getInventory(): Record<string, number> {
    return this.items;
  }
}

class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (this.items[item]) {
      this.items[item] += quantity;
    } else {
      this.items[item] = quantity;
    }
    console.log(`Adicionado ao armazém: ${quantity} unidades de "${item}".`);
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
      console.log(`Item "${item}" removido do armazém.`);
    } else {
      console.log(`Item "${item}" não encontrado no armazém.`);
    }
  }
}

class StoreInventory extends Inventory {
  private readonly maxQuantity: number = 10; 

  addItem(item: string, quantity: number): void {
    const currentQuantity = this.items[item] || 0;

    if (currentQuantity + quantity > this.maxQuantity) {
      console.log(
        `Não é possível adicionar ${quantity} unidades de "${item}". Limite máximo de ${this.maxQuantity} unidades por item.`
      );
      this.items[item] = this.maxQuantity; 
    } else {
      this.items[item] = currentQuantity + quantity;
      console.log(`Adicionado à loja: ${quantity} unidades de "${item}".`);
    }
  }

  removeItem(item: string): void {
    if (this.items[item]) {
      delete this.items[item];
      console.log(`Item "${item}" removido da loja.`);
    } else {
      console.log(`Item "${item}" não encontrado na loja.`);
    }
  }
}
