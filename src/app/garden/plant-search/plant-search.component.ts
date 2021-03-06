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
  @Output() toggleDetailsModalEvent = new EventEmitter<any>();
  @Output() setDetailsEvent = new EventEmitter<any>();
  plantData: any[] = [];
  images: any = [];
  details: any;
  loading: boolean = false;

  constructor(private gardenService: GardenService) {}

  ngOnInit() {}

  addPlantToGrid(plant: any) {
    this.addPlantToGridEvent.emit(plant);
  }

  addImageToGrid(image: any) {
    this.addImageToGridEvent.emit(image);
  }

  toggleLoadingIcon(): void {
    this.loading = !this.loading;
  }

  // submitForm(form: NgForm) {
  //   this.toggleLoadingIcon();
  //   this.gardenService
  //     .getPlantData(form.value.searchTerm)
  //     .pipe(
  //       flatMap(shortPlantData => {
  //         return this.gardenService.getId(shortPlantData);
  //       })
  //     )
  //     .subscribe((plantData: any) => {
  //       this.plantData = plantData;
  //     });

  //   this.gardenService.getImages(form.value.searchTerm).subscribe(response => {
  //     this.images = response;
  //   });
  //   this.toggleLoadingIcon();
  // }

  //modal
  toggleSearchModal(): void {
    this.toggleSearchModalEvent.emit();
  }

  toggleDetailsModal(): void {
    this.toggleDetailsModalEvent.emit();
  }

  addToFavorites(favorite: object, image: any) {
    this.gardenService.moveToFavorites(favorite, image);
  }

  setDetails(plant: any) {
    this.setDetailsEvent.emit(plant);
  }

  submitForm(form: NgForm) {
    this.loading = true; // Add this line
    this.gardenService
      .getPlantData(form.value.searchTerm)
      .pipe(
        flatMap(shortPlantData => {
          return this.gardenService.getId(shortPlantData);
        })
      )
      .subscribe((plantData: any) => {
        this.loading = false;
        this.plantData = plantData;
      });

    this.gardenService.getImages(form.value.searchTerm).subscribe(response => {
      this.images = response;
    });
  }
}
