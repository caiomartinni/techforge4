class Temperatura {
    valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }
  
    ConverterParaFahrenheit(): number {
      return (this.valor * 9/5) + 32;
    }
  
    ConverterParaKelvin(): number {
      return this.valor + 273.15;
    }
  
    exibirTemperaturas(): void {
      console.log(`Temperatura em Celsius: ${this.valor}°C`);
      console.log(`Temperatura em Fahrenheit: ${this.ConverterParaFahrenheit()}°F`);
      console.log(`Temperatura em Kelvin: ${this.ConverterParaKelvin()} K`);
    }
  }
