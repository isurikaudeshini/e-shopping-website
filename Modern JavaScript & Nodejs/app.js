// const express = require('express');
import express from 'express';
// import file
// const resHandler = require('./response-handler');

// Use file type : not for third party modules but for our own files 
import { resHandler }  from './response-handler.js';

const app = express();

// Register the function in the middleware
app.get('/',resHandler);

app.listen(3000);
