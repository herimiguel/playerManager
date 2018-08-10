import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { GameStatusComponent } from './game-status/game-status.component';

import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    ManagePlayerComponent,
    PlayerListComponent,
    AddPlayerComponent,
    PlayerStatusComponent,
    GameStatusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }