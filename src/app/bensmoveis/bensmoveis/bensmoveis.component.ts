import { Component, OnInit } from '@angular/core';
import { Bemmovel } from '../models/bemmovel';
import { BensmoveisService } from '../services/bensmoveis.service';

@Component({
  selector: 'app-bensmoveis',
  templateUrl: './bensmoveis.component.html',
  styleUrls: ['./bensmoveis.component.scss'],
})
export class BensmoveisComponent implements OnInit {
  bensMoveis: Bemmovel[] = [];

  constructor(bensmoveisService: BensmoveisService) {
    this.bensMoveis = bensmoveisService.list();
  }
  ngOnInit(): void {}
}
