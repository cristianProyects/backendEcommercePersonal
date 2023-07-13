const { config } = require('./config/config');
const express = require('express');
const app = express();
const mainRouter = require('./routes');
const cors =  require('cors');
const { errorBoom, errorSequelize, error } = require('./middlewares/error');
require('./utils/auth');

app.use(cors());
app.use(express.json());
mainRouter(app);
app.use(errorBoom, errorSequelize, error);

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`);
});
