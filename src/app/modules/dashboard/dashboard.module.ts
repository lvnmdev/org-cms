import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouter } from './dashboard.router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';


@NgModule({
    imports: [
        CommonModule,
        DashboardRouter
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [],
    providers: [
        DashboardService
    ]
})
export class DashboardModule { }
