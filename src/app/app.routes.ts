import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Contact } from './contact/contact';
import { Gestion } from './gestion/gestion';
import { NotFound } from './not-found/not-found';



export const routes: Routes = [
  { path: 'accueil', component: Accueil },
  { path: 'liste', component: Liste },
  { path: 'contact', component: Contact },
  { path: 'gestion', component: Gestion },
  { path: 'not-found', component: NotFound },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil' }
  
];





