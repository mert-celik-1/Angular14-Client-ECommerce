import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';
import { MatCardModule } from '@angular/material/card';
import { OrderDetailDialogComponent } from './order-detail-dialog/order-detail-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthorizeMenuDialogComponent } from './authorize-menu-dialog/authorize-menu-dialog/authorize-menu-dialog.component'; 
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    DeleteDialogComponent,
    SelectProductImageDialogComponent,
    OrderDetailDialogComponent,
    AuthorizeMenuDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule,MatBadgeModule,
    FileUploadModule
  ]
})
export class DialogModule { }
