import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FellowshipComponent } from './components/fellowship/fellowship.component';
import { PremanuService } from './premanu.service';
import { HttpClientModule } from '@angular/common/http';
import { GetInvolvedComponent } from './components/get-involved/get-involved.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CustomCarouselComponent } from './shared-components/carousel/carousel.component';
import { HamburgerComponent } from './hamburger/hamburger.component';



const components = [
  AppComponent,
  HomeComponent,
  AboutUsComponent,
  OurWorkComponent,
  ProjectsComponent,
  FellowshipComponent,
  GetInvolvedComponent,
  CustomCarouselComponent
];

@NgModule({
  declarations: [
    ...components,
    SpinnerComponent,
    HamburgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PremanuService],
  bootstrap: [AppComponent]
})


export class AppModule { }
