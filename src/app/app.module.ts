import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EduChooserComponent } from './components/edu-chooser/edu-chooser.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, NavbarComponent, EduChooserComponent, OrderComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
