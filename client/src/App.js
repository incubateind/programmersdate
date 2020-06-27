import React from "react";
// import "./App.css";
import { HMap } from "./components/HMap";

function App() {
  const [current, setCurrent] = React.useState({});
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setCurrent({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    } else {
      alert(
        "Your browser does not support location tracking, or permission is denied."
      );
    }
  }, []);
  return (
    <div className="App">
      <HMap current={current}></HMap>
    </div>
  );
}

export default App;
