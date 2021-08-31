import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import {ProfileDataService} from '../app/services/profile-data.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DateCountPipe } from './date-count.pipe';
import { LandingComponent } from './components/landing/landing.component';
// import { ContentsComponent } from './components/contents/contents.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoryComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DateCountPipe,
    LandingComponent,
    // ContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
