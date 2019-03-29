import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatastoreService } from './datastore.service';
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [DatastoreService, TypeaheadModule]
    };
  }
}
