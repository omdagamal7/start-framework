import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartFrameworkComponent } from './start-framework/start-framework.component';

const routes: Routes = [
  {path:"",redirectTo:"startFramework",pathMatch:"full"},
  {path:"startFramework",component:StartFrameworkComponent,title:"home"},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"portfolio",component:PortfolioComponent,title:"portfolio"},
  {path:"contact",component:ContactComponent,title:"contact"},
  {path:"**",component: NotFoundComponent,title:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
