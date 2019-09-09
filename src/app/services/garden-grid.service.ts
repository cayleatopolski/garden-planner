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
    }
  };
  public gardenGrid: GridsterItem[] = [];

  constructor() {}

  addItem(): void {
    console.log("working");
    this.gardenGrid.push({
      cols: 1,
      id: UUID.UUID(),
      rows: 1,
      x: 1,
      y: 1
    });
  }
  deleteItem(id: string): void {
    const item = this.gardenGrid.find(d => d.id === id);
    this.gardenGrid.splice(this.gardenGrid.indexOf(item), 1);
  }
}

// console.log(this.gardenGrid);
