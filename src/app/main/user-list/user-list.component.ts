import { Component, OnInit } from '@angular/core';
import { WireService } from '../service/wire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  userNameOnChange = 'all';
  userNameOnSearch;

  constructor( private wireService: WireService, private router: Router) { }

  ngOnInit() {
    this.users = this.wireService.getUsers();
  }

  onChange() {
    let table = document.getElementById('user-table-id');
    let tbody = table.getElementsByTagName('tbody')[0];
    let tds = tbody.getElementsByClassName('user-table-name');

    for (let i = 0; i < tds.length; i++) {
      if (tds[i].innerHTML === this.userNameOnChange) {
        tds[i].parentElement.style.display = '';
      } else if (this.userNameOnChange === 'all') {
        tds[i].parentElement.style.display = '';
      } else {
        tds[i].parentElement.style.display = 'none';
      }
    }
  }

  onSearch() {
    let table = document.getElementById('user-table-id');
    let tbody = table.getElementsByTagName('tbody')[0];
    let tds = tbody.getElementsByClassName('user-table-name');
    let inputValue = (<HTMLInputElement>document.getElementById('userInputValue')).value;
    for (let i = 0; i < tds.length; i++) {
      if (tds[i].innerHTML.toUpperCase().indexOf(inputValue.toUpperCase()) > -1) {
        tds[i].parentElement.style.display = '';
      } else {
        tds[i].parentElement.style.display = 'none';
      }
    }
  }

  resetToAll() {
    this.userNameOnChange = 'all';
    this.onChange();
  }

}

