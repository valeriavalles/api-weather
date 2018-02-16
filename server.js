const express = require('express');
const app = express();
const server = app.listen(3005, encender);
function encender() {
  console.log('servidor encendido');
}
app.use(express.static('public'));