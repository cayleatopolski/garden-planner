import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { GardenService } from "./garden.service";
import { PlantSearchComponent } from './plant-search/plant-search.component';

@NgModule({
  declarations: [AppComponent, PlantSearchComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [GardenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
