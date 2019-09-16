import { Component, OnInit } from "@angular/core";
import { GardenService } from "../services/garden.service";
import { GardenGridService } from "../services/garden-grid.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  favorites: any[];
  details: any;

  constructor(
    private gardenService: GardenService,
    private gardenGridService: GardenGridService
  ) {}

  ngOnInit() {
    this.favorites = this.gardenService.getFavorites();
  }

  setDetails(plant: any) {
    this.gardenService.setDetails(plant);
  }
}
