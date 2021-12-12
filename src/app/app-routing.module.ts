import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [

  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //tech news
  {path:'business',component:BusinessnewsComponent}, //businessnews
  {path:'sport',component:SportnewsComponent},
  {path:'health',component:HealthnewsComponent},
  {path:'aboutus',component:AboutusComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
