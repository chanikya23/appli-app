import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { OffersComponent } from './offers/offers.component';
import { Offers1Component } from './offers1/offers1.component';
import { BodyComponent } from './body/body.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"login",component:LoginComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'body', component: BodyComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'offers1', component: Offers1Component },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
