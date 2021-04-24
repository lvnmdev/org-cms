import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagerRouter } from './user-manager.router';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { UserManagerService } from './services/user-manager.service';


@NgModule({
    imports: [
        CommonModule,
        UserManagerRouter
    ],
    declarations: [
        UserManagerComponent
    ],
    exports: [],
    providers: [
        UserManagerService
    ]
})
export class UserManagerModule { }
