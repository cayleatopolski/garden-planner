import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, combineLatest } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class GardenService {
  private apiToken = null;
  images: any[] = [];
  plantData: any[];

  constructor(private http: HttpClient, private router: Router) {}

  isExpired() {
    return new Date(this.apiToken.expiration * 1000) < new Date();
  }

  getAuth(): Observable<string> {
    // check if we have active token, or if it's expired.
    if (!this.apiToken || this.isExpired()) {
      //get token
      return this.http.get("http://localhost:5000/auth").pipe(
        flatMap(res => {
          this.apiToken = res;
          return of(this.apiToken.token);
        })
      );
    } else {
      return of(this.apiToken.token);
    }
  }

  getPlantData(searchTerm: string): Observable<any> {
    // check if we have active token, or if it's expired.
    return this.getAuth().pipe(
      flatMap(token => {
        return this.http.get(
          `https://trefle.io/api/plants/?token=${token}&q=${searchTerm}`
        );
      })
    );
  }

  //routes
  goToGarden(): void {
    this.router.navigate(["garden"]);
  }

  getId(plants: any): Observable<any> {
    const detailObs = [];
    for (let i = 0; i < plants.length; i++) {
      detailObs.push(
        this.getAuth().pipe(
          flatMap(token => {
            return this.http.get(
              `https://trefle.io/api/plants/${plants[i].id}?token=${token}`
            );
          })
        )
      );
    }
    return combineLatest(detailObs);
  }
}
