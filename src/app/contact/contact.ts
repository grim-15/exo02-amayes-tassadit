import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})

export class Contact {
  public contactForm: FormGroup;

  public constructor(private router: Router, private contactService: ContactService) { // <-- injecte le service
    this.contactForm = new FormGroup({
      prenom: new FormControl('', Validators.required),
      nom: new FormControl('', Validators.required),
      age: new FormControl(''),
      hideEmail: new FormControl(false),
      email: new FormControl('', [Validators.required, Validators.email]),
      commentaire: new FormControl('', Validators.required)
    });

    this.contactForm.get('hideEmail')?.valueChanges.subscribe(hide => {
      const emailControl = this.contactForm.get('email');
      if (hide) {
        emailControl?.reset();
        emailControl?.clearValidators();
      } else {
        emailControl?.setValidators([Validators.required, Validators.email]);
      }
      emailControl?.updateValueAndValidity();
    });
  }

  public envoyer() {
    if (this.contactForm.valid) {
      this.contactService.save(this.contactForm.value);

      alert("Le formulaire est valide");

      this.router.navigate(['/accueil']);
    }
  }
}
