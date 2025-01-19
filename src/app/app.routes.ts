import { Routes } from '@angular/router';
import { CfmotoComponent } from './components/cfmoto/cfmoto.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SalePolicyComponent } from './components/sale-policy/sale-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { GtsScootersComponent } from './components/gts-scooters/gts-scooters.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cfmoto', component: CfmotoComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'sale-policy', component: SalePolicyComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'gts-scooters', component: GtsScootersComponent },
];
