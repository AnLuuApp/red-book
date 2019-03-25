import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { TokenStorage } from './token.storage';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialImportModule} from '../material-import/material-import.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MaterialImportModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    TokenStorage
  ]
})
export class AuthModule { }
