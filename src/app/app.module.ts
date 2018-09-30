import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatviewComponent } from './chatview/chatview.component';
import { DataServiceService } from './data-service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    ChatviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
