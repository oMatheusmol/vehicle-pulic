import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component'
import { GetVehiclesComponent } from './gets/get-vehicles/get-vehicles.components'
import { UpdateVehiclesComponent } from './updates/update/update-vehicle.component'
import { DeleteVehiclesComponent } from './deletes/delete-vehicle/delete-vehicle.component'

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    GetVehiclesComponent,
    UpdateVehiclesComponent,
    DeleteVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
