import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Important pour [(ngModel)]
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from '../services/activite';

@Component({
  selector: 'app-consult-act',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consult-act.html',
  styleUrl: './consult-act.scss'
})
export class ConsultAct implements OnInit {
  activiteTexte: string = '';
  currentIndex: number = 0;
  isEditing: boolean = false; // Gère l'affichage du mode édition

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public activiteService: Activite
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.currentIndex = +idParam;
      this.activiteTexte = this.activiteService.objectifs[this.currentIndex];
    }
  }

  supprimeElem() {
    this.activiteService.removeItem(this.currentIndex);
    this.router.navigate(['/home']);
  }

  activerModeEdition() {
    this.isEditing = true;
  }

  sauvegarder() {
    this.activiteService.updateItem(this.currentIndex, this.activiteTexte);
    this.isEditing = false;
  }

  retour() {
    this.router.navigate(['/home']);
  }
}