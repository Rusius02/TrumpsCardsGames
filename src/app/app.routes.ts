import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RallyDakarComponent } from './components/rally-dakar/rally-dakar.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'game/rallye-dakar', component: RallyDakarComponent },
    { path: '**', redirectTo: '/welcome' } 
  ];
