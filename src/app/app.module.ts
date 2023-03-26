import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './_components/modal/modal.component';
import { TableComponent } from './_components/table/table.component';
import { StatusbadgeComponent } from './_components/statusbadge/statusbadge.component';
import { DelaybadgeComponent } from './_components/delaybadge/delaybadge.component';
import { ProgressbarComponent } from './_components/progressbar/progressbar.component';
import { QuickitemformComponent } from './_components/quickitemform/quickitemform.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TableComponent,
    StatusbadgeComponent,
    DelaybadgeComponent,
    ProgressbarComponent,
    QuickitemformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
