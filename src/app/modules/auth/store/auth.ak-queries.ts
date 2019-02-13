import { Injectable } from '@angular/core';
import { CommandDispatcher } from 'app/modules/shared/dispatchers';
import { AutoUnsubscriber } from 'app/modules/shared/safe-unsubscriber';
import { BaseAkQueries } from 'app/store/base.ak-queries';
import { AppAkQueries } from 'app/store/app.ak-queries';
import { AuthState } from 'app/modules/auth/core/auth.state-model';
import { AuthQueries } from 'app/modules/auth/core/auth-queries.interface';
import { AuthAkStore } from 'app/modules/auth/store/auth.ak-store';

@AutoUnsubscriber()
@Injectable()
export class AuthAkQueries extends BaseAkQueries<AuthState> implements AuthQueries {
  public readonly token$ = this.appQueries.token$;

  constructor(
    protected dispatcher: CommandDispatcher,
    protected store: AuthAkStore,
    private appQueries: AppAkQueries,
  ) {
    super( store, dispatcher );
  }
}
