import { Component, inject } from '@angular/core';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, switchMap, tap } from 'rxjs';
import { Character } from '../../models/rick-morty.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
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
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonSkeletonText,
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/characters"></ion-back-button>
        </ion-buttons>
        <ion-title>Rick & Morty Characters</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        @if (character(); as c) {
          <img [src]="c.image" [alt]="c.name" />
          <ion-card-header>
            <ion-card-title>
              {{ c.name }}
            </ion-card-title>
            <ion-card-subtitle>
              {{ c.gender }}
            </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-chip color="primary">
              {{ c.status }}
            </ion-chip>
          </ion-card-content>
        } @else {
          <ion-skeleton-text
            style="height: 520px; width: 100%"
            [animated]="true"
          ></ion-skeleton-text>
        }
      </ion-card>
    </ion-content>
  `,
  styles: `
    ion-card {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  `,
})
export default class CharacterComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);

  character = toSignal(
    this.route.params.pipe(
      filter(({ characterId }) => !!characterId),
      map(({ characterId }) => characterId),
      switchMap((id) =>
        this.http.get<Character>(
          `https://rickandmortyapi.com/api/character/${id}`,
        ),
      ),
    ),
  );
}
