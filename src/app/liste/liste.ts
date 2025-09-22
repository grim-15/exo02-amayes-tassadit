import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Film } from '../../models/film'; 

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './liste.html',
  styleUrls: ['./liste.scss']
})
export class Liste {
  public films: Film[] = [ 
    { title: 'Bird Box Barcelona', poster: 'assets/1.webp' },
    { title: 'Badland Hunters', poster: 'assets/2.webp' },
    { title: 'The Matrix', poster: 'assets/3.jpg' },
    { title: 'Purple Hearts', poster: 'assets/4.avif' },
    { title: 'The Killer', poster: 'assets/5.1.webp' }
  ];

  public selectedFilm: Film | null = null;

  public selectFilm(film: Film) { 
    this.selectedFilm = film;
  }
}
