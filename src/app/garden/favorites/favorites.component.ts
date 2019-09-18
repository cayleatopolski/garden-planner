import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { GardenService } from "../../services/garden.service";
import { GardenGridService } from "../../services/garden-grid.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  @Output() toggleDetailsModalEvent = new EventEmitter<any>();
  @Output() setDetailsEvent = new EventEmitter<any>();
  favorites: any[];
  DBFavorites: any;
  details: any;

  constructor(
    private gardenService: GardenService,
    private gardenGridService: GardenGridService
  ) {}

  ngOnInit() {
    this.favorites = this.gardenService.getFavorites();
    this.gardenService.getDBFavorites().subscribe(response => {
      this.DBFavorites = response;
      console.log(this.DBFavorites);
    })
  }

  setDetails(plant: any) {
    this.setDetailsEvent.emit(plant);
  }

  toggleDetailsModal(): void {
    this.toggleDetailsModalEvent.emit();
  }

  addPlantToGrid(plant: any, image: any) {
    this.gardenGridService.addFavoriteToGrid(plant, image);
  }
}
