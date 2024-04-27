import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VerifyComponent } from './pages/verify/verify.component';
import { MyTripsComponent } from './pages/dashboard/my-trips/my-trips.component';
import { PublicTripsComponent } from './pages/public-trips/public-trips.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //children: [{ path: 'public-trips', component: PublicTripsComponent }],
  },
  {
    path: 'dashboard/public-trips',
    component: PublicTripsComponent,
    //children: [{ path: 'public-trips', component: PublicTripsComponent }],
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'verify',
    component: VerifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
