'use strict';

require('dotenv').config();
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
major: 'Computer Engineering',
university: 'University of Jordan and LTUC'}
  ]
  response.json(mySelf);
})


server.use(express.static('./public'));


server.listen(PORT, () =>{
  console.log(`I am listening to port ${PORT}`);
})