import { Injectable } from '@angular/core';
import { ContactData } from '../../models/contact-data'; 
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private lastContact: ContactData | null = null;

  public save(contact: ContactData) {
    this.lastContact = contact;
  }

  public getLast(): ContactData | null {
    return this.lastContact;
  }
}
