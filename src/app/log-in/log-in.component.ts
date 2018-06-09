import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './service/log.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logForm: FormGroup;

  constructor( private router: Router, private logService: LogService, private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnInit() {
  }

  showMainPage() {
    let user = this.logService.log();
    let userId = {id: user.id};
    localStorage.setItem('user', JSON.stringify(userId));
    this.router.navigate(['/main']);
  }

  createForm() {
    this.logForm = this.fb.group({
      'name': ["", Validators.required],
      'password': ["", Validators.required]
    });
  }

}
