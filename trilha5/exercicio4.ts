abstract class VoteSystem {
    protected votes: Record<string, number>;
  
    constructor() {
      this.votes = {};
    }
  
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
  }
  
  class Election extends VoteSystem {
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
      console.log(`Voto registrado para o candidato "${candidate}".`);
    }
  
    getResults(): object {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate]++;
      } else {
        this.votes[candidate] = 1;
      }
      console.log(`Voto registrado para o candidato "${candidate}".`);
    }
  
    getResults(): { candidate: string; votes: number }[] {
      return Object.entries(this.votes)
        .map(([candidate, votes]) => ({ candidate, votes }))
        .sort((a, b) => b.votes - a.votes); 
    }
  }