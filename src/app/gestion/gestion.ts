import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService, ContactData } from '../services/contact.service';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.scss']
})
export class Gestion {
  lastContact: ContactData | null = null;

  constructor(private contactService: ContactService) {
    this.lastContact = this.contactService.getLast();
  }
}
