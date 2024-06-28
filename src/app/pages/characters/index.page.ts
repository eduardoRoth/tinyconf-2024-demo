import { Component, inject } from '@angular/core';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CharacterResponse } from '../../models/rick-morty.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonCard,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
    IonCard,
    IonCardContent,
    IonItem,
    IonAvatar,
    IonNote,
    IonChip,
    IonBackButton,
    IonButtons,
    RouterLink,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Rick & Morty Characters</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          @for (character of characters(); track character.name) {
            <ion-item button [routerLink]="'/characters/' + character.id">
              <ion-avatar slot="start">
                <img [src]="character.image" [alt]="character.name" />
              </ion-avatar>
              <ion-label>
                <h2>
                  {{ character.name }}
                </h2>
                <p>
                  {{ character.gender }}
                </p>
              </ion-label>
              <ion-chip slot="end" color="medium">
                {{ character.status }}
              </ion-chip>
            </ion-item>
          }
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  styles: ``,
})
export default class CharactersComponent {
  private readonly http = inject(HttpClient);

  characters = toSignal(
    this.http
      .get<CharacterResponse>('https://rickandmortyapi.com/api/character')
      .pipe(map((response) => response.results)),
  );

  constructor() {}
}
