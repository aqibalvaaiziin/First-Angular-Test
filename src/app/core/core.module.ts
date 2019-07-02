import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SortService } from './sort.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [DataService, SortService]
})

export class CoreModule { }