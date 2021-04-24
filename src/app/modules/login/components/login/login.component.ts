import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';

import { FormValidationService } from 'src/app/shared/services/form-validation.service';
import { LoginHttpService } from '../../services/login-http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
        password: ['', [Validators.required, FormValidationService.passwordValidator]]
    });

    constructor(
        private formBuilder: FormBuilder,
        private loginHttpService: LoginHttpService
    ) {}

    ngOnInit(): void {}

    login(): void{
        if (this.loginForm.dirty && this.loginForm.valid) {
            console.log(this.loginForm.value);
            this.loginHttpService.userLogin(this.loginForm.value).subscribe((data: object) => {
                console.log(data);
            });
        }
    }

}
