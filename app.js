const express = require('express')
const app = express()
const port = 3000
//Arduino
const { Board, Sensor } = require("johnny-five");
const board = new Board();

//Potentiometer values
let ponti = 0

//Receives pontentiometer data
board.on("ready", () => {
    const potentiometer = new Sensor("A3"); 
    potentiometer.on("change", () => {
      const {value, raw} = potentiometer;
      ponti = value;
      console.log(ponti)
    });
});


app.use(express.static(__dirname + '/src'))
app.get('/', (req, res) => res.sendFile('index.html'))
app.listen(port, () => console.log('Listening on: ' + port))
