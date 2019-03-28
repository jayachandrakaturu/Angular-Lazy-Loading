import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatastoreService } from '../../@core/datastore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router, private _dataStore: DatastoreService) {}

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: '',
      password: ''
    });
  }
  login(modal) {
    if (modal.email === 'jayac9700@gmail.com' && modal.password === 'jaya*212') {
      this._router.navigate(['/pages']);
      this._dataStore.setData('loginInfo', modal);
    } else {
      alert('please fil the valid email and password');
    }
  }
}
