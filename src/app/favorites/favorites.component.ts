import { Component, OnInit } from '@angular/core';
import { GardenService } from '../services/garden.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[];

  constructor(private gardenService: GardenService) { }

  ngOnInit() {
    this.favorites = this.gardenService.getFavorites()
  }
}
