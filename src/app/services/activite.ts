import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Activite {
  objectifs: string[] = [
    'Objectif 1',
    'Objectif 2',
    'Objectif 3'
  ];

  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }

  updateItem(index: number, nouveauTitre: string) {
    this.objectifs[index] = nouveauTitre;
  }
}