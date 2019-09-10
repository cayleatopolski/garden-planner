import { Injectable } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { UUID } from "angular2-uuid";

@Injectable({
  providedIn: "root"
})
export class GardenGridService {
  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    },
    mobileBreakpoint: 0
  };
  public gardenGrid: GridsterItem[] = [];

  constructor() {
    this.gardenGrid = [
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 }
    ];
  }

  addItem(): void {
    console.log("working");
    this.gardenGrid.push({
      cols: 1,
      id: UUID.UUID(),
      rows: 1,
      x: 0,
      y: 0
    });
  }

  // deleteItem(id: string): void {
  //   const item = this.gardenGrid.find(d => d.id === id);
  //   this.gardenGrid.splice(this.gardenGrid.indexOf(item), 1);
  // }
}

// console.log(this.gardenGrid);
