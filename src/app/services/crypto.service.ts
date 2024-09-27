import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

  constructor(private http: HttpClient) { }

  getCryptoRates(ids: string[], vsCurrency: string): Observable<any> {
    const idsParam = ids.join(',');
    const url = `${this.apiUrl}?ids=${idsParam}&vs_currencies=${vsCurrency}`;
    return this.http.get(url);
  }
}
