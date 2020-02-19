import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
export class DataProvider {
  constructor(private data: DataService, private route: Router) {}

  login(a: any) {
    return this.data.getUser(a);
  }
}
