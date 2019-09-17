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
  details: any;

  constructor(
    private gardenService: GardenService,
    private gardenGridService: GardenGridService
  ) {}

  ngOnInit() {
    this.favorites = this.gardenService.getFavorites();
  }

  setDetails(plant: any) {
    this.setDetailsEvent.emit(plant);
  }

  toggleDetailsModal(): void {
    this.toggleDetailsModalEvent.emit();
  }
}
