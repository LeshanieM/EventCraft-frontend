import { Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BandComponent } from './pages/band/band.component';
import { HallComponent } from './pages/hall/hall.component';
import { CateringComponent } from './pages/catering/catering.component';
import { ContactComponent } from './pages/contact/contact.component';

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
        path:"aboutus",
        component: AboutusComponent
    },
    {
        path:"band",
        component: BandComponent
    },
    {
        path:"hall",
        component: HallComponent
    },
    {
        path:"catering",
        component: CateringComponent
    },
    {
        path:"contact",
        component: ContactComponent
    }
];
