import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WireService } from '../../service/wire.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-companies',
  templateUrl: './add-update-companies.component.html',
  styleUrls: ['./add-update-companies.component.css']
})
export class AddUpdateCompaniesComponent implements OnInit {
  company;
  companyForm: FormGroup;

  constructor(private fb: FormBuilder, private wireService: WireService, private router: Router, private route: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() {
    let name: string = this.route.snapshot.paramMap.get('id');
    if (name) {
      this.company = this.wireService.getCompany(name);
      this.companyForm.patchValue(this.company[0]);
    }
  }

  createForm() {
    this.companyForm = this.fb.group({
      'name': ["", Validators.required],
      'address': ["", Validators.required],
      'validLicenceTill': ["", Validators.required],
      'contactPerson': ["", Validators.required],
      'id': ''
    });
  }

  submit() {
    this.company = this.companyForm.value;
    if (this.company.id) {
      this.wireService.updateCompany(this.company);
      this.router.navigate(['/main/companies']);
    } else {
      this.wireService.saveCompany(this.company);
      this.router.navigate(['/main/companies']);
    }
  }
}
