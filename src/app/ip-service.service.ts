import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpServiceService {
  private ipUrl = 'http://localhost:3000/get-ip';

  constructor(private http: HttpClient) { }

  getIpAddress(): Observable<{ ip: string }> {
    return this.http.get<{ ip: string }>(this.ipUrl);
  }
}
