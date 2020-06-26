import L from "leaflet";

import { isDomAvailable } from "lib/util";

const useConfigureLeaflet = () => {
  if (!isDomAvailable()) return;

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
};

export default useConfigureLeaflet;
