import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

const materialComponents = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialComponents],
  exports: [...materialComponents],
})
export class MaterialModule {}
