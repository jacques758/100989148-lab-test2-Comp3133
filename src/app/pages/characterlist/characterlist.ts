import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Characterfilter } from '../../components/characterfilter/characterfilter';
import { HarryPotter } from '../../services/harry-potter';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, Characterfilter],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  characters: Character[] = [];
  loading = false;
  errorMessage = '';
  pageTitle = 'All Harry Potter Characters';

  constructor(private hpService: HarryPotter) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.loading = true;
    this.errorMessage = '';
    this.pageTitle = 'All Harry Potter Characters';

    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = this.filterVisibleCharacters(data);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Unable to load characters.';
        this.loading = false;
      }
    });
  }

  onHouseSelected(house: string): void {
    if (house === 'All') {
      this.loadAllCharacters();
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.pageTitle = `${house} Characters`;

    this.hpService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        this.characters = this.filterVisibleCharacters(data);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = `Unable to load ${house} characters.`;
        this.loading = false;
      }
    });
  }

  private filterVisibleCharacters(data: Character[]): Character[] {
    return data.filter((character) => Boolean(character.image && character.name));
  }
}
