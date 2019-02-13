import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from 'app/modules/auth/auth.routing';
import { AuthAsyncService, AuthHttpService } from 'app/modules/auth/services';
import { AuthAkStoreModule } from 'app/modules/auth/store';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRouting,
    AuthAkStoreModule
  ],
  providers: [
    {
      provide: AuthAsyncService,
      useClass: AuthHttpService
    }
  ],
})
export class AuthModule { }
