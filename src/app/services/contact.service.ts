import { Injectable } from '@angular/core';

export interface ContactData {
  prenom: string;
  nom: string;
  age?: number;
  email?: string;
  commentaire: string;
}

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
