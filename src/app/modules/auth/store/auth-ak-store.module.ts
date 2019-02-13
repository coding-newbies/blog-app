import { NgModule } from '@angular/core';
import { AuthAkStore } from 'app/modules/auth/store/auth.ak-store';
import { AuthAkQueries } from 'app/modules/auth/store/auth.ak-queries';
import { AuthQueries } from 'app/modules/auth/core';

@NgModule({
  imports: [],
  providers: [
    AuthAkStore,
    {
      provide: AuthQueries,
      useClass: AuthAkQueries
    }
  ]
})
export class AuthAkStoreModule {}
