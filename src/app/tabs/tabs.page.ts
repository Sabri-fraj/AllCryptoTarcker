import { Component } from '@angular/core';
import { CryptoCoin } from '../interfaces/crypto-coin';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  bitcoin$: CryptoCoin;
  constructor() {}

}
