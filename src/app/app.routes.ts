import { Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
    {
        path: "navbar",
        component: NavbarComponent
    },
    {
        path:"",
        component: HeropageComponent
    },
    {
        path:"dashboard",
        component: DashboardComponent
    },
    {
        path:"services",
        component: ServicesComponent
    }
];
