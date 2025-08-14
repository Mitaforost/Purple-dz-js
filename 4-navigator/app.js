const addressLat = 10;
const addressLong = 100;
let positionLat = 2;
let positionLong = 13;

const deltaLat = addressLat - positionLat;
const deltaLong = addressLong - positionLong;

const distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2);

console.log(`Расстояние: ${distance.toFixed(2)} условных единиц`);
