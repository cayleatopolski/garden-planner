import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-garden",
  templateUrl: "./garden.component.html",
  styleUrls: ["./garden.component.css"]
})
export class GardenComponent implements OnInit {
  plants: any[] = [
    "plant 1",
    "plant 2",
    "plant 3",
    "plant 4",
    "plant 5",
    "plant 6",
    "plant 7",
    "plant 8",
    "plant 9",
    "plant 10",
    "plant 11",
    "plant 12"
  ];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.plants, event.previousIndex, event.currentIndex);
    console.log(event);
  }
}
