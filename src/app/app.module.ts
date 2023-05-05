import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { MoneyEarningOptionsComponent } from './components/money-earning-options/money-earning-options.component';
import { BoltServicesComponent } from './components/bolt-services/bolt-services.component';
import { CitiesForPeopleComponent } from './components/cities-for-people/cities-for-people.component';
import { AboutComponent } from './components/about/about.component';
import { NewsAndUpdatesComponent } from './components/news-and-updates/news-and-updates.component';
import { AppDownloadSectionComponent } from './components/app-download-section/app-download-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationSectionComponent } from './components/navigation-section/navigation-section.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    MoneyEarningOptionsComponent,
    BoltServicesComponent,
    CitiesForPeopleComponent,
    AboutComponent,
    NewsAndUpdatesComponent,
    AppDownloadSectionComponent,
    FooterComponent,
    NavigationSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    BsDropdownModule,
  ],
  providers: [BsDropdownConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}
