import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import L from "leaflet";
import { Marker } from "react-leaflet";

import Map from "components/Map";
import axios from "axios";

import { promiseToFlyTo, getCurrentLocation } from "lib/map";

import sampleData from "./sampleData.json";

const LOCATION = {
  lat: 23.767016,
  lng: 78.614674,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 4.5;

const MapMaker = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * Here this is and example of being used to zoom In.
   * look at the axios functio
   */

  async function mapEffect({ leafletElement: map } = {}) {
    if (!map) return;
    const location = await getCurrentLocation().catch(() => LOCATION);
    console.log("Recived Location", location);
    await promiseToFlyTo(map, {
      zoom: 10,
      center: location,
    });

    //LOOK HERE: this is the data fetch block
    let response;
    // console.log(JSON.stringify(data));

    // FIXME: enable dynamic loading
    try {
      response = await axios.get(
        `https://xyz.api.here.com/hub/spaces/${process.env.GATSBY_HERE_SPACEID}/iterate?access_token=${process.env.GATSBY_HERE_ACCESSTOKEN}`
      );
      // console.log(JSON.stringify(response.data));
    } catch (e) {
      console.log(`Failed to fetch hospital data: ${e.message}`, e);
      return;
    }

    // if (!response) return;

    const geoJsonLayers = new L.GeoJSON(response.data, {
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature;

        const {
          hospitalName,
          totalBed,
          equiptedBed,
          availableBed,
          emergencyContact,
        } = properties;

        const html = `
            <span class="icon-marker">
              <span class="icon-marker-tooltip">
                <h2>${hospitalName}</h2>
                <ul>
                <li><strong>Contact no:</strong> ${emergencyContact}</li>
                <li><strong>Available Beds:</strong> ${availableBed}</li>
                <li><strong>Equipted Beds:</strong> ${equiptedBed}</li>
                <li><strong>Total Beds:</strong> ${totalBed}</li>
                </ul>
              </span>
              ${availableBed}
            </span>
          `;

        return L.marker(latlng, {
          icon: L.divIcon({
            className: "icon",
            html,
          }),
          riseOnHover: true,
        });
      },
    });

    geoJsonLayers.addTo(map);

    // LOOK HERE: section ends here
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "HEREMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return <Map {...mapSettings}></Map>;
};

export default MapMaker;
