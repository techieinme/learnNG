import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CreditcardPipePipe } from './creditcard-pipe.pipe';
import { CreditcardServiceService } from './creditcard-service.service';

export interface credidCardConfig {
  userName: string;
  id: string;
}
export const FEATURE_CONFIG_TOKEN = new InjectionToken<credidCardConfig>(
  'FEATURE_CONFIG',
);
@NgModule({
  declarations: [CreditcardComponent, CreditcardPipePipe],
  imports: [CommonModule],
  exports: [CreditcardComponent],
})
export class CreditCardModule {
  static forRoot(
    config: credidCardConfig,
  ): ModuleWithProviders<CreditCardModule> {
    return {
      ngModule: CreditCardModule,
      providers: [
        CreditcardServiceService,
        {
          provide: FEATURE_CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
