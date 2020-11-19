const express = require('express');
const cors = require('cors');
const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 })

server = express();

server.use(cors());

server.use(express.json());

server.listen(4000, () => console.log('Server listening'));

server.get('/', (req, res) => {
  if (req.query.pwm) {
    port.write(parseInt(req.query.pwm), (error, bytesWritten) => {
      if (error) {
        res.status(500);
        res.send(error);
      }
      else {
        res.send(bytesWritten);
      }
    });
  }
})