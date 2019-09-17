import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { GardenService } from "../../services/garden.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  @Output() toggleDetailsModalEvent = new EventEmitter<any>();
  details: any;

  constructor(private gardenService: GardenService) {}

  ngOnInit() {
    this.details = this.gardenService.showDetails();
  }

  toggleDetailsModal(): void {
    this.toggleDetailsModalEvent.emit();
  }
}
