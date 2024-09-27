import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  rubAmount: number = 0;
  cryptoRates: any = {};
  convertedValues: any = {};
  cryptoList = ['bitcoin', 'ethereum', 'litecoin'];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getRates();
  }

  getRates(): void {
    this.cryptoService.getCryptoRates(this.cryptoList, 'rub').subscribe(data => {
      this.cryptoRates = data;
    });
  }

  convert(): void {
    if (this.rubAmount && this.cryptoRates) {
      this.convertedValues = {};
      for (let crypto of this.cryptoList) {
        const rate = this.cryptoRates[crypto]?.rub;
        if (rate) {
          this.convertedValues[crypto] = this.rubAmount / rate;
        }
      }
    }
  }
}