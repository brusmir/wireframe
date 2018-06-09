import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WireService } from '../../service/wire.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})
export class AddUpdateUserComponent implements OnInit {
  user;
  image;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private wireService: WireService, private router: Router, private route: ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.user = this.wireService.getUser(Number(id));
      this.userForm.patchValue(this.user[0]);
      console.log(this.user);
    }
  }

  createForm() {
    this.userForm = this.fb.group({
      'name': ["", Validators.required],
      'email': ["", Validators.required],
      'dateOfSignUp': ["", Validators.required],
      'image': '',
      'id': ""
    });
  }

  submit() {
    this.user = this.userForm.value;
    this.user.image = this.image;
    if (this.user.id) {
      this.wireService.updateUser(this.user);
       this.router.navigate(['/main/users']);
    } else {
      this.wireService.saveUser(this.user);
      this.router.navigate(['/main/users']);
    }
  }

  onFileSelected(event) {
    let image = event.target.value.substring(12);
    this.image = image;
  }
}

