import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { GameStatusComponent } from './game-status/game-status.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo:'/players/list'}, 
    {path: 'players', component:ManagePlayerComponent, children:[
      {path: '', pathMatch: 'full', redirectTo:'/players/list'},
      {path: 'list', component:PlayerListComponent},
      {path: 'addplayer', component:AddPlayerComponent}]},
      
    {path: 'status', pathMatch: 'full', redirectTo:"/status/game/1"},
    {path: 'status/game/:game_num', component:GameStatusComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }