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
  images: any[] = [];

  constructor(private gardenService: GardenService) {}

  ngOnInit() {}

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
        // console.log(this.plantData);
      });

    this.gardenService.getImages(form.value.searchTerm).subscribe(response => {
      this.images = response;
      console.log(this.images);
    });
  }
}
