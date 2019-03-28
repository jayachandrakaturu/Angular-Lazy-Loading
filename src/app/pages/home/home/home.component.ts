import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../../@core/datastore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _dataStore: DatastoreService) {}

  ngOnInit() {
    this._dataStore.currentStore.subscribe(res => {
      console.log(res);
    });
  }
}
