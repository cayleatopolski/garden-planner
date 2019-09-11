import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "final-project";
  closed: boolean = true;

  toggleClass() {
    this.closed = !this.closed;
  }
}
