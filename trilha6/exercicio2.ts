class UserManager {
    private users: { name: string; email: string }[] = [];
  
    createUser(name: string, email: string): void {
      const user = { name, email };
      this.users.push(user);
      console.log(`Usuário "${name}" criado com sucesso.`);
      this.sendEmailNotification(email, `Bem-vindo, ${name}!`);
    }
  
    private sendEmailNotification(email: string, message: string): void {
      console.log(`Enviando email para ${email}: ${message}`);
    }
  
    getUsers(): { name: string; email: string }[] {
      return this.users;
    }
  }
  
  class EmailNotification {
    sendEmail(email: string, message: string): void {
      console.log(`Enviando email para ${email}: ${message}`);
    }
  }
  