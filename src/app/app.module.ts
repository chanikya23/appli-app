import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule} from './app-routing.module';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidnavComponent } from './sidnav/sidnav.component';
import { BodyComponent } from './body/body.component';
import {MatCardModule} from '@angular/material/card';
import { ServicesService } from './services/services.service';
import { OffersComponent } from './offers/offers.component';
import { Offers1Component } from './offers1/offers1.component';
import { FooterComponent } from './footer/footer.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidnavComponent,
    BodyComponent,
    OffersComponent,
    Offers1Component,
    FooterComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
