import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activite } from '../services/activite';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  constructor(public activiteService: Activite) { }

}