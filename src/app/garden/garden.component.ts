import { Component, OnInit } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { GardenGridService } from "../services/garden-grid.service";

import { GardenService } from '../garden.service';

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

  //get rid of this
  gardenGrid: GridsterItem[] = [];

  constructor(private gardenGridService: GardenGridService) {}

  ngOnInit() {
    this.gardenGrid = [
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 },
      { cols: 1, rows: 1, y: 1, x: 1 }
    ];
  }
}
