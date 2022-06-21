import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatIconModule} from '@angular/material/icon'; 
import { MatInputModule } from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogPageRoutingModule } from './confirm-dialog-routing.module';
import { ConfirmDialogPage } from './confirm-dialog.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmDialogPageRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  declarations: [ConfirmDialogPage]
})
export class ConfirmDialogPageModule {}
