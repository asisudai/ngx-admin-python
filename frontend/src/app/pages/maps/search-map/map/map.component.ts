/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../entity/Location';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  @Input()
  public set searchedLocation(searchedLocation: Location) {
    this.latitude = searchedLocation.latitude;
    this.longitude = searchedLocation.longitude;
    this.zoom = 12;
  }

  ngOnInit(): void {
    // set up current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchedLocation = new Location(
          position.coords.latitude, position.coords.longitude,
        );
      });
    }
  }
}
