import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';

const routes: Routes = [
  { path: '', component: FeedbackComponent },
  { path: 'feedback', component: OptionsPageComponent},
  { path: 'submit-page', component: SubmitPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
