import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {CvComponent} from './cv/cv/cv.component';
import {DetailComponent} from './cv/detail/detail.component';
import {TestRoutesParamsComponent} from './test-routes-params/test-routes-params.component';


const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'color', component: ColorComponent},
  {path: 'test/:name/:id', component: TestRoutesParamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
