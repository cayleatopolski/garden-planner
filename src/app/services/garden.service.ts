import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class GardenService {
  private apiToken = null;
  images: any[] = [];
  plantData: any[];
  id: number;

  constructor(private http: HttpClient, private router: Router) {}

  isExpired() {
    return new Date(this.apiToken.expiration * 1000) < new Date();
  }

  getPlantData(searchTerm: string): Observable<any> {
    // check if we have active token, or if it's expired.
    if (!this.apiToken || this.isExpired()) {
      //get token
      return this.http.get("http://localhost:5000/auth").pipe(
        flatMap(res => {
          this.apiToken = res;

          //make request to plants api
          return this.http.get(
            `https://trefle.io/api/plants/?token=${this.apiToken.token}&q=${searchTerm}`
          );
        })
      );
    } else {
      return this.http.get(
        `https://trefle.io/api/plants?token=${this.apiToken.token}&q=${searchTerm}`
      );
    }
    // if (!this.apiToken || this.isExpired()) {
    //   //get token
    //   return this.http.get("http://localhost:5000/auth").pipe(
    //     flatMap(res => {
    //       this.apiToken = res;
    //       //make request to plants api
    //       return this.http.get(
    //         `https://trefle.io/api/plants/${searchTerm}?token=${this.apiToken.token}`
    //       );
    //     })
    //   );
    // }
  }

  // getPlantInfo(searchTerm: string): Observable<any> {
  //   return this.http.get(
  //     `https://trefle.io/api/plants?token=${this.apiToken.token}&q=${searchTerm}`
  //   );
  // }

  //routes
  goToGarden(): void {
    this.router.navigate(["garden"]);
  }

  getId(plants: any): any {
    for (let i = 0; i < plants.length; i++) {
      this.id = plants[i].id;

      this.http
        .get(
          `https://trefle.io/api/plants/${this.id}?token=${this.apiToken.token}`
        )
        .subscribe(response => {
          JSON.stringify(this.images.push(response));
        });
    }
    return this.images;
  }
}
