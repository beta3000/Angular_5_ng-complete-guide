import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  private _serverStatus = 'offline';


  get serverStatus(): string {
    return this._serverStatus;
  }
}
