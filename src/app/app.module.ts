import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './component/image-list/image-list.component';
import { ImageDetailsComponent } from './component/image-details/image-details.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { FavoritesComponent } from './component/favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageDetailsComponent,
    TopBarComponent,
    FavoritesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
