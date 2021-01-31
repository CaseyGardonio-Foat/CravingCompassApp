import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeysService } from 'src/app/keys.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  documenuKey: string;
  mapsKey: string;

  constructor(
    private http: HttpClient,
    private keysService: KeysService) { }

  ngOnInit(): void {
    this.documenuKey = this.keysService.getDocumenuKey();
    this.mapsKey = this.keysService.getMapsKey();
    this.http
    .get(`https://maps.googleapis.com/maps/api/js?key=${this.mapsKey}&callback=initMap&libraries=&v=weekly`)
    .subscribe(map =>{
      // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
    });
  }

  


}
