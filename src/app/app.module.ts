import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FrontComponent } from './components/front/front.component';
import { ImageCategoryComponent } from './components/image-category/image-category.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { HeroSectionComponent } from './components/services/hero-section/hero-section.component';
import { ServiceCatgoryComponent } from './components/services/service-catgory/service-catgory.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    ImageCategoryComponent,
    HomeComponent,
    ServicesComponent,
    HeroSectionComponent,
    ServiceCatgoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
