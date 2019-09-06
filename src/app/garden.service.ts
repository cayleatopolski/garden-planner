import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GardenService {
  constructor(private http: HttpClient) {}

  getPlantData(form: any): Observable<any> {
    return this.http.get(
      `https://trefle.io/api/plants?token=bWFMNzRmSXV4M21qMDJwL2JXUHRvdz09&q=${form.value}`
    );
  }
}
// trefle.io/api/plants?q=rosemary
