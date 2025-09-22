import { Component } from '@angular/core';
import { Film } from '../models/film.model';  // <-- import de l'interface

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public films: Film[] = [
    {titre: 'Interstellar', affiche: 'https://la-banque-de-limage.myshopify.com/cdn/shop/products/Interstellar_580x_crop_center.jpg?v=1573739007', i: 0},
    {titre: 'Se7en', affiche: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/upIOOLVeOoUkTM5fVWwXW2JmBrW.jpg', i: 0},
    {titre: 'Parasite', affiche: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7hLSzZX2jROmEXz2aEoh6JKUFy2.jpg', i: 0},
    {titre: 'Zodiac', affiche: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ajHaO6hqFmvRNsUh3BIFwE5ghsI.jpg', i: 0},
    {titre: 'Jojo Rabbit', affiche: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1uiuoWE0XUqCZpwWKMQwoFpqjkp.jpg', i: 0}
  ];
  public afficherAffiche(titre : string) : void {
    const index=this.films.findIndex(film => film.titre==titre);
    //D'abord, on enleve les affiches qui sont éventuellement déja affiché
    for(let film of this.films) {
      if(film!=this.films[index]){
        film.i=0;
      }
    }
    //ensuite on initialise l'index du fil à afficher à 1
    if(this.films[index].i==0){
      this.films[index].i=1;
    }
    else{this.films[index].i=0;}
  }
}
