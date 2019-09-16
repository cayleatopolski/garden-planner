import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GardenService } from "../../services/garden.service";
import { NgForm } from "@angular/forms";
import { flatMap } from "rxjs/operators";

@Component({
  selector: "app-plant-search",
  templateUrl: "./plant-search.component.html",
  styleUrls: ["./plant-search.component.css"]
})
export class PlantSearchComponent implements OnInit {
  @Output() toggleSearchModalEvent = new EventEmitter<any>();
  @Output() addPlantToGridEvent = new EventEmitter<any>();
  @Output() addImageToGridEvent = new EventEmitter<any>();
  plantData: any[] = [];
  images: any[] = [];
  // showSearchModal: boolean = true;

  constructor(private gardenService: GardenService) {}

  ngOnInit() {}

  addPlantToGrid(plant: any) {
    this.addPlantToGridEvent.emit(plant);
  }

  addImageToGrid(image: any) {
    this.addImageToGridEvent.emit(image);
  }

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

    this.gardenService.getImages(form.value.searchTerm).subscribe(response => {
      this.images = response;
      console.log(this.images);
    });
  }

  //modal
  toggleSearchModal(): void {
    this.toggleSearchModalEvent.emit();
  }

  addToFavorites(favorite: object) {
    this.gardenService.moveToFavorites(favorite);
  }
}
