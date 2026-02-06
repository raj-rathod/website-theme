import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FrontComponent } from './components/front/front.component';
import { ImageCategoryComponent } from './components/image-category/image-category.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    ImageCategoryComponent,
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
