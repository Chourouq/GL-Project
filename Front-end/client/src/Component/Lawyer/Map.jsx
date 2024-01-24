import React, { useEffect } from 'react';
import L from 'leaflet';

function Map() {
  useEffect(() => {
    // Replace the following with actual coordinates for the Lawyer's location
    const lawyerLocation = { lat: 37.7749, lng: -122.4194 };

    // Create the map
    const map = L.map('map').setView([lawyerLocation.lat, lawyerLocation.lng], 15);

    // Add a tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Marker for the Lawyer's location
    L.marker(lawyerLocation).addTo(map)
      .bindPopup('Lawyer Location')
      .openPopup();
  }, []);

  return (
    <div className="bg-white p-8 mt-4">
      <h3 className="text-2xl font-bold mb-4">Localisation</h3>
      <div id="map" style={{ width: '100%', height: '300px' }}></div>
    </div>
  );
}

export default Map;