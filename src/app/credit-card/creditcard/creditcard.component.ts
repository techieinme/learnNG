import { Component, Inject, inject } from '@angular/core';
import { FEATURE_CONFIG_TOKEN, credidCardConfig } from '../credit-card.module';
import { CreditcardServiceService } from '../creditcard-service.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss'],
})
export class CreditcardComponent {
  // constructor(
  //   @inject(FEATURE_CONFIG_TOKEN) public ccConfig: credidCardConfig,
  //   private ccService: CreditcardServiceService,
  // ) {
  //   console.log(this.ccConfig);
  //   console.log(this.ccService);
  // }

  constructor(@Inject(FEATURE_CONFIG_TOKEN) public ccConfig: credidCardConfig) {
    console.log(this.ccConfig);
  }
}
