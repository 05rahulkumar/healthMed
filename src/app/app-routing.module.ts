import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProductListComponent } from './product-pages/product-list/product-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'product',loadChildren:()=>import('./product-pages/product-pages.module').then(m=>m.ProductPagesModule)},
   {path:'about-us', component:AboutusComponent},
   {path:'contact-us', component:ContactUsComponent},
   {path:'login-Signup', component:LoginSignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
