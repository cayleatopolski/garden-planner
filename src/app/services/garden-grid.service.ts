import { Injectable } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { UUID } from "angular2-uuid";

@Injectable({
  providedIn: "root"
})
export class GardenGridService {
  favorites: any[] = [];

  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: false
    },
    mobileBreakpoint: 0,
    minRows: 2,
    maxRows: 5,
    minCols: 2,
    maxCols: 5,
    margin: 5
  };
  public gardenGrid: GridsterItem[] = [];
  showSearchModal: boolean = false;

  constructor() {
    this.gardenGrid = [
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 },
      { cols: 1, id: UUID.UUID(), rows: 1, y: 1, x: 1 }
    ];
  }

  addItem(): void {
    // console.log("working");
    this.gardenGrid.push({
      cols: 1,
      id: UUID.UUID(),
      rows: 1,
      x: 0,
      y: 0
    });
  }

  //   deleteItem(id: string): void {
  //     const item = this.gardenGrid.find(d => d.id === id);
  //     console.log(this.gardenGrid.indexOf(item));
  //     this.gardenGrid.splice(this.gardenGrid.indexOf(item), 1);
  //   }

  toggleSearchModal(): void {
    console.log("doing my best to toggle");
    this.showSearchModal = !this.showSearchModal;
  }
  // addItemToGrid() {
  //   this.gardenGrid.push()
  // }

  // deleteItem(id: string): void {
  //   const item = this.gardenGrid.find(d => d.id === id);
  //   this.gardenGrid.splice(this.gardenGrid.indexOf(item), 1);
  // }
}
