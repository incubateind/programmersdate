export const mapServices = [
  {
    name: "OpenStreetMap",
    attribution:
      '&copy; <a href="http://osm.org/copyright">HERE Map</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "HEREMap",
    attribution: '&copy; <a href="https://www.here.com/">HERE Map</a>',
    url: `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.night/{z}/{x}/{y}/512/png8?apiKey=${process.env.GATSBY_HERE_RESTAPIKEY}&ppi=320`,
  },
];
