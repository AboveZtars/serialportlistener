import express from "express";
import SerialPort from "serialport";
const Readline = require('@serialport/parser-readline')

//Setting the port
const port = new SerialPort("COM4", {
  baudRate: 9600,  
});

//Setting the parser
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

//Express app
const app = express();

//Starting express server
app.listen(3000, () => {
    parser.on('data', console.log)  
});
