import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { ImageDetailsComponent } from './component/image-details/image-details.component';
import { ImageListComponent } from './component/image-list/image-list.component';

const routes: Routes = [
  {path: '', component: ImageListComponent}, 
  {path: 'images/:imageId', component: ImageDetailsComponent},
  {path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})], // hash routing to enable page reloading on github
  exports: [RouterModule]
})
export class AppRoutingModule { }
