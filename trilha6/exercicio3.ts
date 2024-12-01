class EmailSender {
    sendEmail(contact: string, message: string): void {
      if (this.validateContact(contact)) {
        console.log(`Enviando email para ${contact}: ${message}`);
      } else {
        console.log("Contato inválido.");
      }
    }
  
    private validateContact(contact: string): boolean {
      // Validação simples para verificar se o contato é um email válido
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(contact);
    }
  }
