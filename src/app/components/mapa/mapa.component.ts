import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marker } from 'src/app/models/Marker';
import { EditMarkerComponent } from '../edit-marker/edit-marker.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  public markers: Array<Marker> = [];
  zoom = 18;
  lat = 6.150004838021328;
  lng = -75.38465066525328;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.markers.push({
      lat: 6.150004838021328,
      lng: -75.38465066525328,
      title: 'Sin titulo',
      description: 'Sin descripción',
    });
  }

  ngOnInit(): void {}

  addMarker(event: any) {
    this.markers.push({
      ...event.coords,
      title: 'Titulo 2',
      description: 'descripcion 2',
    });
    this._snackBar.open('Marcador agregado', 'OK');
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this._snackBar.open('Marcador Eliminado', 'OK');
  }

  openDialogEdit(item: Marker, index: number): void {
    const dialogRef = this.dialog.open(EditMarkerComponent, {
      width: '250px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { lat, lng } = item;
        const markerEdit = { ...result, lat, lng };
        this.markers[index] = markerEdit;
      }
    });
  }
}
