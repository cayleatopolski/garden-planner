import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GardenService {
  constructor(private http: HttpClient) {}

  getPlantData(searchTerm: string): Observable<any> {
    return this.http.get(
      `https://trefle.io/api/plants?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjoxMjE2LCJvcmlnaW4iOiJodHRwOi8vbG9jYWxob3N0OjQyMDAiLCJhdWQiOiJKb2tlbiIsImV4cCI6MTU2NzgwMDAwNSwiaWF0IjoxNTY3NzkyODA1LCJpc3MiOiJKb2tlbiIsImp0aSI6IjJuMHVtZnZzY2FyMnRxdTcwa2M3YXBpMSIsIm5iZiI6MTU2Nzc5MjgwNX0.p3ocRxMRgy0adQ_na5UBpT_-XuGHtSv1sD73LTyisP4&q=${searchTerm}`
    );
  }
}
// trefle.io/api/plants?q=rosemary
