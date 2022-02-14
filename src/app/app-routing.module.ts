import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayDetailComponent} from 'src/app/assessment-two/display-detail/display-detail.component';
import {ReactiveFormComponent} from 'src/app/forms/reactive-form/reactive-form.component';
import {ProfileEditorComponent} from 'src/app/profile-editor/profile-editor.component';

const routes: Routes = [
  {
    path : 'display-detail',
    component: DisplayDetailComponent
  },
  {
    path : 'form',
    component: ReactiveFormComponent
  },
  {
    path : 'profile',
    component: ProfileEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
