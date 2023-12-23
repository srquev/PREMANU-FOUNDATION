import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ProjectsComponent } from './projects/projects.component';

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
