import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeysService } from 'src/app/keys.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  documenuKey: string;
  mapsKey: string;
  lat: number = 40.688072;
  lng: number = -73.997385;

  constructor(
    private http: HttpClient,
    private keysService: KeysService) { }

  ngOnInit(): void {
    this.documenuKey = this.keysService.getDocumenuKey();
    this.mapsKey = this.keysService.getMapsKey();  
  };
  
}
