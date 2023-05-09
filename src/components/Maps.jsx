import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"

export default function Maps() {
  const sanaaCoordinates = [15.3694, 44.191]

  return (
    <MapContainer
      center={sanaaCoordinates}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        width: "full",
        height:
          window.innerWidth >= 768
            ? "50vh"
            : window.innerWidth >= 480
            ? "30vh"
            : "0",
        zIndex: "1",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={sanaaCoordinates}>
        <Popup>Sana&apos;a, Yemen</Popup>
      </Marker>
    </MapContainer>
  )
}
