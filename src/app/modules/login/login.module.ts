import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRouter } from './login.router';
import { LoginComponent } from './components/login/login.component';
import { LoginHttpService } from './services/login-http.service';

import { FormControlMessagesComponent } from 'src/app/shared/components/form-control-messages/form-control-messages.component';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRouter
    ],
    declarations: [
        LoginComponent,
        FormControlMessagesComponent
    ],
    exports: [],
    providers: [
        LoginHttpService,
        FormValidationService
    ]
})
export class LoginModule { }
