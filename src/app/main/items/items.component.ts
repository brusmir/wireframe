import { Component, OnInit } from '@angular/core';

import { WireService } from '../service/wire.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items;
  selectValue = 'all';
  searchFrom = 1;
  searchTo = 100000;

  constructor( private wireService: WireService) { }

  ngOnInit() {
    this.items = this.wireService.getItems();
  }

  deleteItem(item) {
    this.items = this.wireService.removeItems(item);
  }

  export() {
    let htmltable = document.getElementById('table-id');
    let html = htmltable.outerHTML;
    window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
  }

  onChange() {
    this.searchFrom = 1;
    this.searchTo = 100000;

    let table = document.getElementById('table-id');
    let tbody = table.getElementsByTagName('tbody')[0];
    let tds = tbody.getElementsByClassName('table-category');
    for (let i = 0; i < tds.length; i++) {
      if ( this.selectValue === 'all' ) {
        tds[i].parentElement.style.display = '';
      } else if (tds[i].innerHTML === this.selectValue) {
        tds[i].parentElement.style.display = '';
      } else {
        tds[i].parentElement.style.display = 'none';
      }
    }
  }

  showElements() {
    let table = document.getElementById('table-id');
    let tbody = table.getElementsByTagName('tbody')[0];
    let tds = tbody.getElementsByClassName('table-category');
    for (let i = 0; i < tds.length; i++) {
      if (tds[i].innerHTML === this.selectValue) {
        tds[i].parentElement.style.display = '';
      } else if (this.selectValue === 'all') {
        tds[i].parentElement.style.display = '';
      } else {
        tds[i].parentElement.style.display = 'none';
      }
    }
  }

  onNumberChangeFrom() {
    this.searchFrom = this.searchFrom || 1;

    // Show all elements with value from select box
    this.showElements();

    // Hide elements that are not in the range
    let table = document.getElementById('table-id');
    let tbody = table.getElementsByTagName('tbody')[0];
    let tds = tbody.getElementsByClassName('table-value');
    for (let i = 0; i < tds.length; i++) {
     if (tds[i].parentElement.style.display !== 'none') {
      if ( Number(tds[i].innerHTML) > this.searchFrom ) {
        tds[i].parentElement.style.display = '';
        } else {
          tds[i].parentElement.style.display = 'none';
        }
      }
    }
  }

  onNumberChangeTo() {
    this.searchTo = this.searchTo || 100000;

    //  Show all elements with value from select box
    this.showElements();

    // Hide elements that are not in the range
    let table = document.getElementById('table-id');
    let tbody = table.getElementsByTagName('tbody')[0];
    let tds = tbody.getElementsByClassName('table-value');
    for (let i = 0; i < tds.length; i++) {
      if (tds[i].parentElement.style.display !== 'none') {
        if ( Number(tds[i].innerHTML) > this.searchFrom && Number(tds[i].innerHTML) < this.searchTo) {
          tds[i].parentElement.style.display = '';
        } else {
          tds[i].parentElement.style.display = 'none';
        }
      }
    }
  }

  searchTable() {

    let table = document.getElementById('table-id');
    let tbody = table.getElementsByTagName('tbody')[0];
    let tds = tbody.getElementsByClassName('table-name');
    let inputValue = (<HTMLInputElement>document.getElementById('inputTable')).value;

    let searchFrom = (<HTMLInputElement>document.getElementById('searchFrom')).value;
    let searchTo = (<HTMLInputElement>document.getElementById('searchTo')).value;

    for (let i = 0; i < tds.length; i++) {

      let parent = tds[i].parentElement;
      let children = parent.children;

      for (let p = 0; p < children.length; p++) {
        if (children[p].className === 'table-category') {
          if (children[p].innerHTML === this.selectValue || this.selectValue === 'all') {
            if (Number(children[p].nextElementSibling.innerHTML) >= Number(searchFrom) && Number(children[p].nextElementSibling.innerHTML) <= Number(searchTo) ) {
              for (let j = 0; j < children.length; j++) {
                if (children[j].className === 'table-name') {
                  if (children[j].innerHTML.toUpperCase().indexOf(inputValue.toUpperCase()) > -1) {
                    children[j].parentElement.style.display = '';
                  } else {
                    children[j].parentElement.style.display = 'none';
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}
