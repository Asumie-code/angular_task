import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent } from './component/blog-add/blog-add.component';
import { BlogDetailsComponent } from './component/blog-details/blog-details.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';

const routes: Routes = [
  {path: '', component: BlogListComponent}, 
  {path: 'blogs/:blogId', component: BlogDetailsComponent},
  {path: 'add', component: BlogAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})], // hash routing to enable page reloading on github
  exports: [RouterModule]
})
export class AppRoutingModule { }
