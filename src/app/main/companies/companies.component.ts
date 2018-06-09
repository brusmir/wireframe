import { Component, OnInit } from '@angular/core';

import { WireService } from '../service/wire.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies;

  constructor( private wireService: WireService) { }

  ngOnInit() {
    this.companies = this.wireService.getCompanies();
  }

}
