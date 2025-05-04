// Requirements for Express
const express = require('express');
const path = require('path');
const app = express();
// Check for enviornment port or default to port 3000
const port = 3000 || process.env.port;
// Requirements for Socket.io 
const http = require('http');
const server = http.createServer(app);
