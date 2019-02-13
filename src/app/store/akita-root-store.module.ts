import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AkDispatcher } from 'app/store/akita.dispatcher';
import { AppAkStore } from 'app/store/app.ak-store';
import { AppQueries } from 'app/core';

@NgModule({
  imports: [
    CommonModule,
    AkitaNgDevtools.forRoot()
  ]
})
export class AppAkStoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppAkStoreModule,
      providers: [
        {
          provide: CommandDispatcher,
          useClass: AkDispatcher
        },
        AppAkStore,
        {
          provide: AppQueries,
          useExisting: AppAkStore,
        }
      ]
    };
  }
}
