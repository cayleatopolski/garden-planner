import { Component, OnInit } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { GardenGridService } from "../services/garden-grid.service";
import { GardenService } from "../services/garden.service";

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
  showDetailsModal: boolean = false;
  // showLoginModal: boolean = false;
  clickedIndex: number = null;

  constructor(
    private gardenGridService: GardenGridService,
    private gardenService: GardenService
  ) {}

  ngOnInit() {
    this.gardenGrid = this.gardenGridService.gardenGrid;
  }

  addClickedIndex(index: number) {
    this.clickedIndex = index;
  }

  addPlantToGrid(plant: any) {
    this.gardenGrid[this.clickedIndex].plant = plant;
  }

  addImageToGrid(image: any) {
    this.gardenGrid[this.clickedIndex].image = image;
  }

  onAddHandler() {
    this.gardenGridService.addItem();
  }

  removePlant(index: number): void {
    this.gardenGrid.splice(index, 1);
  }

  toggleSearchModal(): void {
    this.showSearchModal = !this.showSearchModal;
  }

  toggleDetailsModal(): void {
    this.showDetailsModal = !this.showDetailsModal;
  }

  // toggleLoginModal(): void {
  //   this.showLoginModal = !this.showLoginModal;
  // }

  setDetails(plant: any) {
    this.gardenService.setDetails(plant);
  }
}
