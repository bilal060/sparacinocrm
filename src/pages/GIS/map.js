// mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsYWxsIiwiYSI6ImNsY3l1YzB2bDA0bHYzcXFvN2ZkODBmMDUifQ.SzofkdBg0GBjQP-rQ5WYbw';
// const map = new mapboxgl.Map({
//   container: 'map', 
//   style: 'mapbox://styles/bilall/clcz47x23014a14pgt2ggh79j',
//   center: [-122.244963, 37.796840], 
//   zoom: 17
// });

// map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');

// const draw = new MapboxDraw({
//   displayControlsDefault: false,
// });
// document.getElementById('DrawPolygon').onclick = function DrawPolygon() {
//   draw.changeMode('draw_polygon');
// }
// map.addControl(draw);


// map.on('click', (event) => {
//   const features = map.queryRenderedFeatures(event.point, {
//     layers: ['parcels']
//   });
//   if (!features.length) {
//     return;
//   }
//   const feature = features[0];
//   console.log(features)
//   const popup = new mapboxgl.Popup({ offset: [0, -15] })
//     .setLngLat(event.lngLat)
//     .setHTML(
//       `<h3>${feature.properties.SitusAddress}</h3><p>${feature.properties.MailingAddressCityState}</p>`
//     )
//     .addTo(map);
// });

// // After the last frame rendered before the map enters an "idle" state.
// map.on('idle', () => {
//   if (!map.getLayer('parcels')) {
//     return;
//   }

//   const toggleableLayerIds = ['parcels'];

//   for (const id of toggleableLayerIds) {
//     // Skip layers that already have a button set up.
//     if (document.getElementById(id)) {
//       continue;
//     }


//     // Show or hide layer when the toggle is clicked.
//     document.getElementById('layersbtn').onclick = function () {
//       // debugger
//       const ParcleLayer = 'parcels';

//       const visibility = map.getLayoutProperty(
//         ParcleLayer,
//         'visibility'
//       );

//       if (visibility === 'visible') {
//         map.setLayoutProperty(ParcleLayer, 'visibility', 'none');
//       } else {
//         map.setLayoutProperty(
//           ParcleLayer,
//           'visibility',
//           'visible'
//         );
//       }
//     };

//   }
// })