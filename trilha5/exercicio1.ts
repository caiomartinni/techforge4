abstract class TaskManager {
    protected tasks: Set<string>; 
  
    constructor() {
      this.tasks = new Set();
    }
  
    abstract addTask(task: string): void;
  
    listTasks(): string[] {
      return Array.from(this.tasks);
    }
  }
  
  class Project extends TaskManager {
    private projectName: string;
  
    constructor(projectName: string) {
      super();
      this.projectName = projectName;
    }
  
    addTask(task: string): void {
      if (this.tasks.has(task)) {
        console.log(`A tarefa "${task}" já existe no projeto "${this.projectName}".`);
      } else {
        this.tasks.add(task);
        console.log(`Tarefa "${task}" adicionada ao projeto "${this.projectName}".`);
      }
    }
  }
  
  class DailyTasks extends TaskManager {
    constructor() {
      super();
    }
  
    addTask(task: string): void {
      if (this.tasks.has(task)) {
        console.log(`A tarefa diária "${task}" já foi adicionada.`);
      } else {
        this.tasks.add(task);
        console.log(`Tarefa diária "${task}" adicionada.`);
      }
    }
  }
  