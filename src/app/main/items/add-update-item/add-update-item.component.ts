import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WireService } from '../../service/wire.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-item',
  templateUrl: './add-update-item.component.html',
  styleUrls: ['./add-update-item.component.css']
})
export class AddUpdateItemComponent implements OnInit {
  item;
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private wireService: WireService, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.item = this.wireService.getItem(Number(id));
      this.itemForm.patchValue(this.item[0]);
    }
  }

  createForm() {
    this.itemForm = this.fb.group({
      'name': ["", Validators.required],
      'orderNumber': "",
      'category': ["", Validators.required],
      'value': ["", Validators.required],
      'description': ["", Validators.required],
      'barcode': ["", Validators.required]
    });
  }

  submit() {
    this.item = this.itemForm.value;
    if (this.item.orderNumber) {
      this.wireService.updateItem(this.item);
      this.router.navigate(['/main/items']);
    } else {
      this.wireService.saveItem(this.item);
      this.router.navigate(['/main/items']);
    }
  }
}
