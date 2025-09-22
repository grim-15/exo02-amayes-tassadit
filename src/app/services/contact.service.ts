import { Injectable } from '@angular/core';
import {ContactData} from '../models/contact.model';

@Injectable({
  providedIn: 'root' // service singleton accessible partout
})
export class ContactService {
  private lastContact: ContactData | null = null;

  save(contact: ContactData) {
    this.lastContact = contact;
  }

  getLast(): ContactData | null {
    return this.lastContact;
  }
}
