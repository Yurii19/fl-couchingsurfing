import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideBarComponent } from './pages/dashboard/aside-bar/aside-bar.component';
import { DashboardCollageComponent } from './pages/dashboard/dashboard-collage/dashboard-collage.component';
import { ToDoListComponent } from './pages/dashboard/to-do-list/to-do-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TravelPlansComponent } from './pages/dashboard/travel-plans/travel-plans.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicTripsComponent } from './pages/public-trips/public-trips.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { SearchComponent } from './components/header/search/search.component';
import { CreateTripComponent } from './pages/public-trips/create-trip/create-trip.component';
import { HttpTokenInterceptor } from './services/interceptor/http-token.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileAsideComponent } from './pages/profile/profile-aside/profile-aside.component';
import { ProfileMainSectionComponent } from './pages/profile/profile-main-section/profile-main-section.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { EditProfileAsideComponent } from './pages/edit-profile/edit-profile-aside/edit-profile-aside.component';
import { EditProfileMainComponent } from './pages/edit-profile/edit-profile-main/edit-profile-main.component';
import { AboutFormComponent } from './pages/edit-profile/about-form/about-form.component';
import { HomeFormComponent } from './pages/edit-profile/home-form/home-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ToDoListComponent,
    DashboardComponent,
    AsideBarComponent,
    AsideBarComponent,
    DashboardCollageComponent,
    TravelPlansComponent,
    FooterComponent,
    PublicTripsComponent,
    NavbarComponent,
    SearchComponent,
    CreateTripComponent,
    ProfileComponent,
    ProfileAsideComponent,
    ProfileMainSectionComponent,
    EditProfileComponent,
    EditProfileAsideComponent,
    EditProfileMainComponent,
    AboutFormComponent,
    HomeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    TitleCasePipe,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
