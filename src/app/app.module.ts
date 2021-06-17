import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MediaMatcher } from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, HeaderComponent, SideNavComponent, RecommendationComponent, LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ChartsModule, MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule
  ],
  providers: [MediaMatcher, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
