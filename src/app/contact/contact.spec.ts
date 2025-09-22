import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      email: ['', [Validators.email]],
      hideEmail: [false],
      commentaire: ['', Validators.required]
    });
  }

  envoyer() {
    if (this.contactForm.valid) {
      this.contactService.save(this.contactForm.value); // sauvegarde
      alert("Le formulaire est valide");
      this.router.navigate(['/accueil']); // redirection
    }
  }
}
