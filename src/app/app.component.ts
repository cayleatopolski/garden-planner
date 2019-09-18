import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "final-project";
  closed: boolean = true;
  showLoginModal: boolean = false;

  toggleClass() {
    this.closed = !this.closed;
  }

  toggleLoginModal(): void {
    this.showLoginModal = !this.showLoginModal;
  }
}
