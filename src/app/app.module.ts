import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameSwapPipe } from './nameSwap.pipe';
import { AddNameTitle} from './addtitle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NameSwapPipe,
    AddNameTitle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
