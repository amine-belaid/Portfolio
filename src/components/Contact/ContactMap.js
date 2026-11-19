import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Bundlers break Leaflet's default marker icon paths, so set them explicitly.
const pin = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const POSITION = [35.8691, 10.541]; // Kalla Kebira, Sousse

const ContactMap = () => (
  <div className="contact__map">
    <MapContainer center={POSITION} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={POSITION} icon={pin}>
        <Popup>Amine lives here, come over for a cup of coffee</Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default ContactMap;