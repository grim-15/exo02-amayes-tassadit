import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule, RouterModule], 
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
}

