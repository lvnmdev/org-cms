import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
    selector: 'form-control-messages',
    template: `
    <div class="help form-control-messages" *ngIf="errorMessage !== null">{{errorMessage}}</div>
  `,
})

export class FormControlMessagesComponent {

    @Input()
    control!: FormControl;

    constructor() {}

    get errorMessage(): any {
        for (const propertyName in this.control.errors) {
            if (
                this.control.errors.hasOwnProperty(propertyName) &&
                this.control.touched
            ) {
                return FormValidationService.getValidatorErrorMessage(
                    propertyName,
                    this.control.errors[propertyName]
                );
            }
        }

        return null;
    }
}
