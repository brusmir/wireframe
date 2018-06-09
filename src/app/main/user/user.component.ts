import { Component, OnInit } from '@angular/core';

import { WireService } from '../service/wire.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  constructor( private wireService: WireService) { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    let id = user.id;
    this.user = this.wireService.getUser(id);
  }

}
