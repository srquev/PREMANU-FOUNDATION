import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FellowshipComponent } from './components/fellowship/fellowship.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'fellowship', component: FellowshipComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ourwork', component: OurWorkComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
