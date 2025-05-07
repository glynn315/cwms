import { Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import { MembersComponent } from './views/members/members.component';
import { LogsComponent } from './views/logs/logs.component';
export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'members',
        component: MembersComponent
    },
    {
        path:'logs',
        component: LogsComponent
    }
];
