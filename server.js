'use strict';

const { request, response } = require('express');
// require('dotenv').config();
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.static('./public'));

// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello');
// });

// app.get('/data', (request, response) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well Trained',
//   };
//   response.status(200).json(airplanes);
// });

// app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));

// app.listen(PORT,() => console.log(`Listening on port ${PORT}`));


const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.get('/test', (request, response)=>{
  response.send('Ohooo, My Server is WORKING!!!');
})

server.get('/myself', (request,response) =>{
  let mySelf = [
 {name: 'Aseel',
age: '23',
major: 'Computer Engineering'}
  ]
  response.json(mySelf);
})


server.use(express.static('./public'));


server.listen(PORT, () =>{
  console.log(`I am listening to port ${PORT}`);
})