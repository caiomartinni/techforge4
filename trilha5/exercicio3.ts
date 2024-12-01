abstract class FavoriteManager {
    protected favorites: string[];
  
    constructor() {
      this.favorites = [];
    }
  
    abstract addFavorite(item: string): void;
  
    getFavorites(): string[] {
      return this.favorites;
    }
  }
  
  
  class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (!this.favorites.includes(item)) {
        this.favorites.push(item);
        this.favorites.sort(); 
        console.log(`Filme "${item}" adicionado à lista de favoritos.`);
      } else {
        console.log(`Filme "${item}" já está na lista de favoritos.`);
      }
    }
  }
  
  class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
      if (!this.favorites.includes(item)) {
        this.favorites.unshift(item);
        console.log(`Livro "${item}" adicionado à lista de favoritos.`);
      } else {
        console.log(`Livro "${item}" já está na lista de favoritos.`);
      }
    }
  }
