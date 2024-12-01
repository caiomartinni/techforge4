class Agenda {
    compromissos: string[];
  
    constructor() {
      this.compromissos = [];
    }
  
    adicionarCompromisso(compromisso: string): void {
      this.compromissos.push(compromisso);
      console.log(`Compromisso "${compromisso}" criado.`);
    }
  
    listarCompromissos(): void {
      if (this.compromissos.length === 0) {
        console.log("Não há compromissos agendados.");
      } else {
        console.log("Compromissos agendados:");
        this.compromissos.forEach((compromisso, index) => {
          console.log(`${index + 1}. ${compromisso}`);
        });
      }
    }
  }
