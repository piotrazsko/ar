import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import sc3ene from "./assets/girl/scene.gltf";
function App() {
  return (
    <div className="App">
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-text
          value="Nadia is sleeping"
          look-at="[gps-camera]"
          scale="120 120 120"
          gps-entity-place="latitude: 53.85206; longitude: 27.49133;"
        ></a-text>
        <a-entity
          gltf-model={sc3ene}
          rotation="0 180 0"
          scale="0.15 0.15 0.15"
          gps-entity-place="latitude: 53.85206; longitude: 27.49133;"
          animation-mixer
        />
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
}

export default App;
