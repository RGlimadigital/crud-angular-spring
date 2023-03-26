import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bemmovel } from '../models/bemmovel';

@Injectable({
  providedIn: 'root',
})
export class BensmoveisService {
  constructor(httpClient: HttpClient) {}

  //Ele está listado fora do construtor.
  list(): Bemmovel[] {
    return [];
  }
}
