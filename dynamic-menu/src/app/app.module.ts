import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewempComponent } from './_components/viewemp/viewemp.component';
import { EditempComponent } from './_components/editemp/editemp.component';
import { DeleteempComponent } from './_components/deleteemp/deleteemp.component';
import { EnterInfoComponent } from './_components/enter-info/enter-info.component';
import { DataService } from '../../src/app/data.service'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './_components/edit/edit.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ColorPickerModule } from 'ngx-color-picker';


const appRoutes: Routes = [
  { path: 'enterinfo', component: EnterInfoComponent},
  { path: 'deleteInfo', component: DeleteempComponent},
  { path: 'editInfo', component: EditempComponent},
  { path: 'viewInfo/:id', component: ViewempComponent}
  // { path: '**', component: HomeheaderComponent}
];

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, ViewempComponent, EditempComponent, JwPaginationComponent, DeleteempComponent, EnterInfoComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    ColorPickerModule,
    MatSliderModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),    
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})

export class AppModule {}