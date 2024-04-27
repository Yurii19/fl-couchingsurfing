import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideBarComponent } from './pages/dashboard/aside-bar/aside-bar.component';
import { DashboardCollageComponent } from './pages/dashboard/dashboard-collage/dashboard-collage.component';
import { ToDoListComponent } from './pages/dashboard/to-do-list/to-do-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TravelPlansComponent } from './pages/dashboard/travel-plans/travel-plans.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyTripsComponent } from './pages/dashboard/my-trips/my-trips.component';
import { PublicTripsComponent } from './pages/public-trips/public-trips.component';

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
    MyTripsComponent,
    PublicTripsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    TitleCasePipe,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
