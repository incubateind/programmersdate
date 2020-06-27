import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "green",
  },
}));

export const HMap = (props) => {
  const mapRef = React.useRef(null);
  React.useLayoutEffect(() => {
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "4KPBKxjiNVDzx7F_50w9gvRBX_GYXUCjV0Xl8-kLLBw",
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 28, lng: 77 },
      zoom: 13,
      pixelRatio: window.devicePixelRatio || 1,
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    const ui = H.ui.UI.createDefault(map, defaultLayers);

    const success = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      map.setCenter({ lat, lng });
      map.setZoom(10);
      const currentMarker = new H.map.Marker({ lat, lng });
      map.addObject(currentMarker);
      currentMarker.addEventListener("tap", (event) => {
        alert("This is your location");
      });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      alert(
        "Your browser does not support location tracking, or permission is denied."
      );
    }
    const addMarkerfromData = (platform, data) => {
      let service = platform.getSearchService();
      data.map((ele) =>
        service.geocode(
          {
            q: ele.address,
          },
          (result) => {
            let item = result.items[0];
            const currentGroup = new H.map.Group();
            map.addObject(currentGroup);
            console.log(item);
            map.setCenter(item.position);
            const currentMarker = new H.map.Marker(item.position);
            console.log(item);
            // currentMarker.setData(ele);
            currentGroup.addObject(currentMarker);
            // currentGroup.addEventListener("tap", (evt) => {});
          },
          alert
        )
      );
    };
    console.log(props.data);
    addMarkerfromData(platform, props.data);

    return () => {
      map.dispose();
    };
  }, [mapRef, props.data]);
  const classes = useStyles();

  return (
    <div>
      <div
        className="map"
        ref={mapRef}
        style={{ height: "500px", width: "600px" }}
      />
    </div>
  );
};
