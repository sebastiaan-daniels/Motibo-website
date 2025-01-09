import { Routes } from '@angular/router';
import { CfmotoComponent } from './components/cfmoto/cfmoto.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cfmoto', component: CfmotoComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about-us', component: AboutUsComponent },
];
