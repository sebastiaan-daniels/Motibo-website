import { Routes } from '@angular/router';
import { CfmotoComponent } from './components/cfmoto/cfmoto.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cfmoto', component: CfmotoComponent },
    { path: 'contact', component: ContactComponent },
];
