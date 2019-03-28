import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatastoreService {
  private currentStoreSubject = new BehaviorSubject<DynamicObject>(
    {} as DynamicObject
  );
  public currentStore = this.currentStoreSubject.asObservable();
  constructor() {}
  setData(key: string, value: any) {
    const currentStore = this.getCurrentStore();
    currentStore[key] = value;
    this.currentStoreSubject.next(currentStore);
  }
  getCurrentStore(): DynamicObject {
    console.log(this.currentStoreSubject.value);
    return this.currentStoreSubject.value;
  }
  getData(key: string): any {
    const currentStore = this.getCurrentStore();
    return currentStore[key];
  }
  clearStore() {
    const currentStore = this.getCurrentStore();
    Object.keys(currentStore).forEach(key => {
      delete currentStore[key];
    });
    this.currentStoreSubject.next(currentStore);
  }
}
export interface DynamicObject {
  [key: string]: any;
}
