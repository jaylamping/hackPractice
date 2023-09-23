'use client';

import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.099724, lng: -94.578331 }, // New York as an example
        zoom: 12,
      });

      const pickleUrl =
        'https://assets.stickpng.com/images/5eafecb3f7f4540004b715e7.png';

      const courts = [
        {
          name: 'Court 1',
          position: { lat: 39.1007, lng: -94.5796 },
          icon: pickleUrl,
        },
        {
          name: 'Court 2',
          position: { lat: 39.0987, lng: -94.5776 },
          icon: pickleUrl,
        },
        {
          name: 'Court 3',
          position: { lat: 39.1017, lng: -94.5756 },
          icon: pickleUrl,
        },
      ];

      courts.forEach((court) => {
        const marker = new google.maps.Marker({
          position: court.position,
          map: map,
          title: court.name,
          icon: {
            url: court.icon,
            scaledSize: new google.maps.Size(100, 50),
          },
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${court.name}</h3>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    }
  }, []);

  return <div id='map' style={{ height: '400px', width: '100%' }}></div>;
};

export default Map;
