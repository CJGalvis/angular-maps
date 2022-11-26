import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Marker } from 'src/app/models/Marker';

@Component({
  selector: 'app-edit-marker',
  templateUrl: './edit-marker.component.html',
  styleUrls: ['./edit-marker.component.scss'],
})
export class EditMarkerComponent implements OnInit {
  public editMarkerForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Marker,
    public dialogRef: MatDialogRef<EditMarkerComponent>
  ) {}

  ngOnInit(): void {
    this.editMarkerForm.patchValue(this.data);
  }

  guardar() {
    this.dialogRef.close(this.editMarkerForm.value);
  }

  cerrarModal() {
    this.dialogRef.close();
  }
}
