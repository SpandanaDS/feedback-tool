import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OptionsPageComponent } from './options-page/options-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    OptionsPageComponent,
    SubmitPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
