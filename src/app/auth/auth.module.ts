import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule, TypeaheadModule.forRoot()],
  declarations: [LoginComponent]
})
export class AuthModule {}
