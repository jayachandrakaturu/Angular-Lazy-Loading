import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../../@core/datastore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tableListData = [];
  constructor(private _dataStore: DatastoreService) {}

  ngOnInit() {
    this._dataStore.currentStore.subscribe(res => {});
    this.tableListData = [
      {
        id: '586a4e571a1b9a45d337f7ec',
        index: 0,
        age: 29,
        name: 'Wyatt Meadows',
        gender: 'male',
        company: 'ELENTRIX',
        email: 'wyattmeadows@elentrix.com',
        phone: '+1 (835) 596-3267',
        address: '317 Conklin Avenue, Enoree, Louisiana, 275'
      },
      {
        id: '586a4e5731b8f13d8dc689c6',
        index: 1,
        age: 33,
        name: 'April Benton',
        gender: 'female',
        company: 'KRAG',
        email: 'aprilbenton@krag.com',
        phone: '+1 (960) 439-2351',
        address: '708 Grafton Street, Juntura, Illinois, 2053'
      },
      {
        id: '586a4e571a1b9a45d337f7ec',
        index: 0,
        age: 29,
        name: 'Wyatt Meadows',
        gender: 'male',
        company: 'ELENTRIX',
        email: 'wyattmeadows@elentrix.com',
        phone: '+1 (835) 596-3267',
        address: '317 Conklin Avenue, Enoree, Louisiana, 275'
      },
      {
        id: '586a4e571a1b9a45d337f7ec',
        index: 0,
        age: 29,
        name: 'Wyatt Meadows',
        gender: 'male',
        company: 'ELENTRIX',
        email: 'wyattmeadows@elentrix.com',
        phone: '+1 (835) 596-3267',
        address: '317 Conklin Avenue, Enoree, Louisiana, 275'
      },
      {
        id: '586a4e571a1b9a45d337f7ec',
        index: 0,
        age: 29,
        name: 'Wyatt Meadows',
        gender: 'male',
        company: 'ELENTRIX',
        email: 'wyattmeadows@elentrix.com',
        phone: '+1 (835) 596-3267',
        address: '317 Conklin Avenue, Enoree, Louisiana, 275'
      },
      {
        id: '586a4e571a1b9a45d337f7ec',
        index: 0,
        age: 29,
        name: 'Wyatt Meadows',
        gender: 'male',
        company: 'ELENTRIX',
        email: 'wyattmeadows@elentrix.com',
        phone: '+1 (835) 596-3267',
        address: '317 Conklin Avenue, Enoree, Louisiana, 275'
      },
      {
        id: '586a4e571a1b9a45d337f7ec',
        index: 0,
        age: 29,
        name: 'Wyatt Meadows',
        gender: 'male',
        company: 'ELENTRIX',
        email: 'wyattmeadows@elentrix.com',
        phone: '+1 (835) 596-3267',
        address: '317 Conklin Avenue, Enoree, Louisiana, 275'
      },
      {
        id: '586a4e571a1b9a45d337f7ec',
        index: 0,
        age: 29,
        name: 'Wyatt Meadows',
        gender: 'male',
        company: 'ELENTRIX',
        email: 'wyattmeadows@elentrix.com',
        phone: '+1 (835) 596-3267',
        address: '317 Conklin Avenue, Enoree, Louisiana, 275'
      }
    ];
  }
}
