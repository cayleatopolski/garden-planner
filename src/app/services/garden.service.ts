import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, combineLatest } from "rxjs";
import { flatMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class GardenService {
  private apiToken = null;
  favorites: any[] = [];
  clickedIndex: number = null;
  details: any;

  constructor(private http: HttpClient, private router: Router) {}

  isExpired() {
    return new Date(this.apiToken.expiration * 1000) < new Date();
  }

  getAuth(): Observable<string> {
    if (!this.apiToken || this.isExpired()) {
      return this.http.get(`${environment.authApiUrl}/auth`).pipe(
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
    return this.getAuth().pipe(
      flatMap(token => {
        return this.http.get(
          `https://trefle.io/api/plants/?token=${token}&q=${searchTerm}&page_size=6`
        );
      })
    );
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

  getImages(searchTerm: any): Observable<any> {
    return this.http.get(
      `https://pixabay.com/api/?key=13595691-f1b1086d0aa3fd34e61442edf&q=${searchTerm}&image_type=photo`
    );
  }

  getDBFavorites(): Observable<any> {
    return this.http.get(`${environment.authApiUrl}/favorites`);
  }

  goToGarden(): void {
    this.router.navigate(["garden"]);
  }

  moveToFavorites(plant: object, image: any) {
    this.favorites.push({ plant, image });
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  setDetails(details: any) {
    this.details = details;
  }

  showDetails() {
    return this.details;
  }
}
