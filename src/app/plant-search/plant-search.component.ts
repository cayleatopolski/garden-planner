import { Component, OnInit } from "@angular/core";
import { GardenService } from "../services/garden.service";
import { NgForm } from "@angular/forms";
import { flatMap } from "rxjs/operators";

@Component({
  selector: "app-plant-search",
  templateUrl: "./plant-search.component.html",
  styleUrls: ["./plant-search.component.css"]
})
export class PlantSearchComponent implements OnInit {
  plantData: any[] = [];
  show: boolean = false;

  constructor(private gardenService: GardenService) {}

  ngOnInit() {}

  // getPlants(searchTerm: string): any {
  //   this.gardenService.getPlantData(searchTerm).subscribe(response => {
  //     this.plantData = response;
  //     // console.log(this.plantData);
  //   });
  // }

  // getImg() {
  //   for (let i = 0; i < this.plantData.length; i++) {
  //     this.id = this.plantData[i].id;
  //     return this.id;
  //   }

  //   this.gardenService.getPlantImg(this.id).subscribe(response => {
  //     console.log(response);
  //   });
  // }

  submitForm(form: NgForm) {
    this.gardenService
      .getPlantData(form.value.searchTerm)
      .pipe(
        flatMap(shortPlantData => {
          return this.gardenService.getId(shortPlantData);
        })
      )
      .subscribe((plantData: any) => {
        this.plantData = plantData;
      });
  }
}
