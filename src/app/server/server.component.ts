import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  private _serverStatus = 'offline';

  constructor() {
    this._serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  get serverStatus(): string {
    return this._serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
