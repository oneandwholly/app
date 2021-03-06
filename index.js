const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/json' }))
router(app);

// Server Setup
const port = process.env.PORT || 7700;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
