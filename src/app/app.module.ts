import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular material
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

// Angular maps
import { AgmCoreModule } from '@agm/core';
import { EditMarkerComponent } from './components/edit-marker/edit-marker.component';

@NgModule({
  declarations: [AppComponent, MapaComponent, EditMarkerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBpN3Efn2tDf7TqXqlaJdsg5OBYs-FesM0',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditMarkerComponent],
})
export class AppModule {}
