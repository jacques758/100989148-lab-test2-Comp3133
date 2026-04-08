import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HarryPotter } from '../../services/harry-potter';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {
  character: Character | null = null;
  errorMessage = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private hpService: HarryPotter
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route id =', id);

    if (!id) {
      this.errorMessage = 'Character ID is missing.';
      this.loading = false;
      return;
    }

    this.hpService.getCharacterById(id).subscribe({
      next: (data) => {
        console.log('Character details =', data);
        this.character = data;
        this.loading = false;

        if (!data) {
          this.errorMessage = 'Character not found.';
        }
      },
      error: (err) => {
        console.error('Details error:', err);
        this.errorMessage = 'Unable to load character details.';
        this.loading = false;
      }
    });
  }
}