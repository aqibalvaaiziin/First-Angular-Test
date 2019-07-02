import { NgModule } from "@angular/core";
import { capitalizePipe } from './pipe/convertIdr.pipe';

@NgModule({
  declarations: [capitalizePipe],
  exports: [capitalizePipe]
})

export class SharedModule { }