import { Component, OnInit } from "@angular/core";
import { GardenService } from "../garden.service";

@Component({
  selector: "app-plant-search",
  templateUrl: "./plant-search.component.html",
  styleUrls: ["./plant-search.component.css"]
})
export class PlantSearchComponent implements OnInit {
  plantData: any[];

  constructor(private gardenService: GardenService) {}

  ngOnInit() {}

  getPlants(searchTerm: string): any {
    // console.log(form.value.name);
    this.gardenService.getPlantData(searchTerm).subscribe(response => {
      this.plantData = response;
      // console.log(response);
    });
  }
}
