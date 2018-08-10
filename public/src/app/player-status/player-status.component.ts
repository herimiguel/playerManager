import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  @Input() players;
  @Input() game_num;

  constructor() { }

  @Output() changeStatusEmitter = new EventEmitter();

  changeStatus(status, id){
    let statusData = {'status': status, 'id': id, 'game_num': this.game_num};
    this.changeStatusEmitter.emit(statusData);
  }

  ngOnInit() {
  }

}