import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { GardenService } from "./services/garden.service";
import { PlantSearchComponent } from "./plant-search/plant-search.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { GardenComponent } from "./garden/garden.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../Material-Module";
import { RouterModule, Routes } from "@angular/router";
import { GridsterModule } from "angular-gridster2";
import { GardenGridService } from "./services/garden-grid.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search", component: PlantSearchComponent },
  { path: "garden", component: GardenComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "/home"}
];

@NgModule({
  declarations: [
    AppComponent,
    PlantSearchComponent,
    HomeComponent,
    AboutComponent,
    GardenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    GridsterModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GardenService, GardenGridService],
  bootstrap: [AppComponent]
})
export class AppModule {}
