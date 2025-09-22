import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { ContactData } from '../../models/contact-data';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.scss']
})
export class Gestion {
  public lastContact: ContactData | null = null;

  constructor(
    private contactService: ContactService,
    private router: Router 
  ) {
    this.lastContact = this.contactService.getLast();

    if (!this.lastContact) {
      this.router.navigate(['/not-found']);
    }
  }
}
