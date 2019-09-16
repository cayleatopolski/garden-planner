import { Component, OnInit } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { GardenGridService } from "../services/garden-grid.service";

@Component({
  selector: "app-garden",
  templateUrl: "./garden.component.html",
  styleUrls: ["./garden.component.css"]
})
export class GardenComponent implements OnInit {
  get options(): GridsterConfig {
    return this.gardenGridService.options;
  }
  get layout(): GridsterItem[] {
    return this.gardenGridService.gardenGrid;
  }

  gardenGrid: GridsterItem[] = [];
  showSearchModal: boolean = false;
  clickedIndex: number = null;

  constructor(private gardenGridService: GardenGridService) {}

  ngOnInit() {
    this.gardenGrid = this.gardenGridService.gardenGrid;
  }

  addClickedIndex(index: number) {
    this.clickedIndex = index;
  }

  addPlantToGrid(plant: any) {
    this.gardenGrid[this.clickedIndex].plant = plant;
  }

  onAddHandler() {
    this.gardenGridService.addItem();
  }

  removePlant(index: number): void {
    this.gardenGrid.splice(index, 1);
  }

  toggleSearchModal(): void {
    this.showSearchModal = !this.showSearchModal;
    console.log(this.showSearchModal);
  }
}
