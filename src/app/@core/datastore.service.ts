import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatastoreService {
  private currentStoreSubject = new BehaviorSubject<DynamicObject>({} as DynamicObject);
  public currentStore = this.currentStoreSubject.asObservable();
  constructor() {}
  setData(key: string, value: any) {
    const currentStore = Object.assign({} as DynamicObject);
    currentStore[key] = value;
    this.currentStoreSubject.next(currentStore);
  }
}
export interface DynamicObject {
  [key: string]: any;
}
