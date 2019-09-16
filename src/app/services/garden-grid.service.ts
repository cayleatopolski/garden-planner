import { Injectable } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";

@Injectable({
  providedIn: "root"
})
export class GardenGridService {
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
    margin: 5,
    disableWarnings: true
  };
  public gardenGrid: GridsterItem[] = [];

  constructor() {
    this.gardenGrid = [
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 }
    ];
  }

  addItem(): void {
    this.gardenGrid.push({
      cols: 1,
      rows: 1,
      x: 0,
      y: 0
    });
  }

  addPlantToGrid(index: number, plant: any) {
    this.gardenGrid[index].plant = plant;
  }

  addImageToGrid(index: number, image: any) {
    this.gardenGrid[index].image = image;
  }
}
