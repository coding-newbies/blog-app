import { NgModule } from '@angular/core';
import { UserQueries } from 'app/modules/user/core';
import { UserAkQueries } from 'app/modules/user/store/user.ak-queries';
import { UserAkStore } from 'app/modules/user/store/user.ak-store';

@NgModule({
  imports: [],
  providers: [
    UserAkStore,
    {
    provide: UserQueries,
    useClass: UserAkQueries
    }
  ]
})
export class UserAkitaStoreModule {}
