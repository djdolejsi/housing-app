// Create a map object.
var myMap = L.map("map", {
    center: [32.7766642, -96.7969879],
    zoom: 10
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // An array containing each city's name, location, and population

  L.marker([32.7766642, -96.7969879]).addTo(myMap);
  L.marker([33.0198400, -96.6988900]).addTo(myMap);
  L.marker([32.965557, -96.715836]).addTo(myMap);
  L.marker([33.103172, -96.670547]).addTo(myMap);
  L.marker([33.155373,  -96.818733]).addTo(myMap);
  L.marker([32.907223,  -96.635277]).addTo(myMap); 
  
  
  